import express, { Request, Response } from "express";

const boardRounter = express.Router()

boardRounter.get('/', (req:Request, res:Response) => {
  res.send('board 전체 데이터')
})

boardRounter.put('/', (req:Request, res:Response) => {
  res.send('board list 순서 바꾸기')
})

export default boardRounter

