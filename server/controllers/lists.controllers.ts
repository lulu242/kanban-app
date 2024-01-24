import { NextFunction, Request, Response } from "express";
import List from "../models/lists.model";
import User from "../models/user.model";
import mongoose from "mongoose";
import HttpError from "../models/http-error";
import { validationResult } from "express-validator";

// TODO 로그인 jwt 수정 시 userId 수정해야함
async function postList(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req)
  if(!errors.isEmpty()) {
    const err = new HttpError('title is empty', 401)
    return next(err);
  }
  const { title, user_id } = req.body 
  const newList = new List({title, user_id})

  let user
  try {
    user = await User.findById(user_id)
  } catch (error) {
    const err = new HttpError('create List failed', 500)
    return next(error);
  }

  if(!user) {
    const err = new HttpError('user not exist', 401)
    return next(err)
  }

  try {
    const sess = await mongoose.startSession()
    sess.startTransaction()
    await newList.save({session: sess})
    user.lists.push(newList)
    await user.save({session: sess})
    await sess.commitTransaction()
  } catch(error) {
    const err = new HttpError('create list failed', 500)
    return next(err)
  }
  res.status(201).json(newList.toObject({getters: true}));
}

// TODO: 로그인 jwt 수정하면 userId 부분 수정하기
async function getLists(req: Request, res: Response, next: NextFunction) {
  const user_id = new mongoose.Types.ObjectId(req.body.user_id)
  let allLists
  try {
    allLists = await List.find({user_id}).populate({
      path: 'cards',
      match: { completed: false }
    });
  } catch (error) {
    const err = new HttpError('get lists failed', 500)
    next(err);
  }
  res.status(200).json(allLists?.map(list => list.toObject({getters: true})));
}


async function updateList(req: Request, res: Response, next: NextFunction) {
  try {
    let updateList = await List.findByIdAndUpdate(
      req.params.listId,
      req.body,
      { new: true }
    )
    if (updateList) {
      res.status(200).json(updateList.toObject({getters: true}));
    } else {
      res.status(404).send();
    }
  } catch (error) {
    next(error);
  }
}


async function deleteList(req: Request, res: Response, next: NextFunction) {
  let list
  try {
    list = await List.findById(req.params.listId).populate('cards');
  } catch(error) {
    const err = new HttpError('listId findById failed', 500)
    return next(err)
  }

  if(!list) {
    const err = new HttpError('invalid listId', 401)
    return next(err)
  }

  try {
    const sess = await mongoose.startSession()
    sess.startTransaction()
    await Promise.all(list.cards.map(async (card) => {
      await card.deleteOne({ session: sess });
    }));
    await list.deleteOne({session: sess})
    await sess.commitTransaction()
  } catch (error) {
    const err = new HttpError('delete failed', 500)
    next(err);
  }
  res.status(200).json({ message: 'Deleted list and card' })
}

export { postList, getLists, updateList, deleteList }