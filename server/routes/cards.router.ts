import express from "express";
import { deleteCard, getCardById, postCard, updateCard } from "../controllers/cards.controllers";

const cardsRounter = express.Router()

cardsRounter.post('/:listId', postCard)

// cardsRounter.get('/completed', (req:Request, res:Response) => {
//   res.send('완료한 카드만')
// })

cardsRounter.get('/:cardId', getCardById)

cardsRounter.patch('/:cardId', updateCard)

cardsRounter.delete('/:cardId', deleteCard)

export default cardsRounter