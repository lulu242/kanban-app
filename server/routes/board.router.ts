import express, { Request, Response } from "express";

const boardRounter = express.Router()

boardRounter.get('/', (req:Request, res:Response) => {
  res.send('board')
})

export default boardRounter

