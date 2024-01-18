import { NextFunction, Request, Response } from "express";
import User from "../models/user.model";


async function signUp(req: Request, res: Response, next: NextFunction) {
  const createUsre = new User(req.body)
  try {
    await createUsre.save();
  } catch (error) {
    return next(error);
  }
  res.status(201).send('회원가입 완료');
}


async function logIn(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await User.findOne({ userId: req.body.userId, password: req.body.password }, '-password').populate({
      path: 'lists',
      populate: {
        path: 'cards',
      },
    })
    // populate 중첩 사용하면 성능이 안 좋아 질 수 있음 getlists로 한 번더 요청 보내는 걸로 수정
    if (!user) {
      return res.status(400).json({ error: 'User not found' })
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}


export { signUp, logIn }