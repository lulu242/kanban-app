import express, { Request, Response } from "express";
import { logIn, signUp } from "../controllers/user.controllers";

const UserRounter = express.Router()

UserRounter.get('/', logIn)

UserRounter.post('/', signUp)

export default UserRounter

