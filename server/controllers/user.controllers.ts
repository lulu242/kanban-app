import { NextFunction, Request, Response } from "express";
import User from "../models/user.model";
import HttpError from "../models/http-error";
import { validationResult } from "express-validator";


async function signUp(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const createUsre = new User(req.body)
  try {
    await createUsre.save();
  } catch (error) {
    const err = new HttpError('회원가입 실패', 500)
    return next(err);
  }
  res.status(201).json({message: 'sign Up!'})
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
      const err = new HttpError('Invalid credentials', 401)
      return next(err)
    }
    res.status(200).json(user.toObject({getters: true}));
  } catch (error) {
    const err = new HttpError('login failed', 500)
    next(err);
  }
}


export { signUp, logIn }