import { NextFunction, Request, Response } from "express";
import User from "../models/user.model";


async function signUp(req: Request, res: Response, next: NextFunction) {
  const createUsre = new User(req.body)
  try {
    await createUsre.save();
  } catch (error) {
    return next(error);
  }
  res.status(201).json(createUsre);
}


async function logIn(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await User.find({userId: req.body.userId, password: req.body.password}).populate('listsId')
    if(user) {
      res.status(200).json(user);
    } else {res.status(400).json({error: 'User not found'})}
  } catch (error) {
    next(error);
  }
}


export { signUp, logIn }