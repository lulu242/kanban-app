import express, { Request, Response } from "express";

const listsRounter = express.Router()

listsRounter.get('/', (req:Request, res:Response) => {
  res.send('list')
})

export default listsRounter