import express, { Request, Response } from "express";

const cardsRounter = express.Router()

cardsRounter.get('/', (req:Request, res:Response) => {
  res.send('card')
})

export default cardsRounter