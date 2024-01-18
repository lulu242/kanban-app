import { NextFunction, Request, Response } from "express";
import List from "../models/lists.model";
import User from "../models/user.model";
import mongoose from "mongoose";

// TODO 로그인 jwt 수정 시 userId 수정해야함
async function postList(req: Request, res: Response, next: NextFunction) {
  const { title, user_id } = req.body 
  const newList = new List({title, user_id})

  let user
  try {
    user = await User.findById(user_id)
  } catch (error) {
    return next(error);
  }

  if(!user) {
    return next()
  }

  try {
    const sess = await mongoose.startSession()
    sess.startTransaction()
    await newList.save({session: sess})
    user.lists.push(newList)
    await user.save({session: sess})
    await sess.commitTransaction()
  } catch(error) {
    return next(error)
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
    next(error);
  }
  res.status(200).json(allLists);
}


async function updateList(req: Request, res: Response, next: NextFunction) {
  try {
    let updateList = await List.findByIdAndUpdate(
      req.params.listId,
      req.body,
      { new: true }
    )
    if (updateList) {
      res.status(200).json(updateList);
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
    return next(error)
  }

  if(!list) {
    return next()
  }

  try {
    const sess = await mongoose.startSession()
    sess.startTransaction()
    await Promise.all(list.cards.map(async (card) => {
      await card.deleteOne({ session: sess });
      console.log(card)
    }));
    await list.deleteOne({session: sess})
    await sess.commitTransaction()
  } catch (error) {
    next(error);
  }
  res.status(200).send()
}

export { postList, getLists, updateList, deleteList }