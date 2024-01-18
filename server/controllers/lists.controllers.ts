import { NextFunction, Request, Response } from "express";
import List from "../models/lists.model";
import User from "../models/user.model";
import mongoose from "mongoose";


async function postList(req: Request, res: Response, next: NextFunction) {
  const newList = new List(req.body)
  try {
    await newList.save();
    await User.findByIdAndUpdate()
  } catch (error) {
    return next(error);
  }
  res.status(201).json(newList);
}


async function getLists(req: Request, res: Response, next: NextFunction) {
  try {
    const allLists = await List.find({}).populate({
      path: 'cards',
      match: { completed: false }
    });
    res.status(200).json(allLists);
  } catch (error) {
    next(error);
  }
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