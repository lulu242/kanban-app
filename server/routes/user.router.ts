import express, { Request, Response } from "express";
import { logIn, signUp } from "../controllers/user.controllers";
import { check } from "express-validator";


const UserRounter = express.Router()

UserRounter.get('/', logIn)

UserRounter.post('/',
  [
    check('userId')
      .isAlphanumeric()
      .isLength({ min: 5, max: 20 })
      .withMessage('아이디는 5~20자의 영문 소문자와 숫자로만 사용 가능합니다.'),
    check('password')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
      .isLength({ min: 6, max: 16 })
      .withMessage('비밀번호는 6~16자의 영문 대/소문자, 숫자, 특수문자를 사용해야 합니다.')
  ],
  signUp
)

export default UserRounter

