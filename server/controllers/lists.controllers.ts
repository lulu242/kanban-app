import { NextFunction, Request, Response } from "express";
import List from "../models/lists.model";



async function postList(req: Request, res: Response, next: NextFunction) {
  const createList = new List(req.body)
  try {
    await createList.save();
  } catch (error) {
    return next(error);
  }
  res.status(201).json(createList);
}


async function getLists(req: Request, res: Response, next: NextFunction) {
  try {
    const allLists = await List.find({});
    // const NotCompletedCards = allLists.map(list => list.)
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