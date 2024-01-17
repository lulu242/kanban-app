import { NextFunction, Request, Response } from "express";
import List from "../models/lists.model";
import User from "../models/user.model";



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
      req.params.lidtId,
      req.body
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
  try {
    let updateList = await List.findByIdAndDelete(req.params.listId);
    if (updateList) {
      res.status(200).json(updateList);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    next(error);
  }
}

export { postList, getLists, updateList, deleteList }