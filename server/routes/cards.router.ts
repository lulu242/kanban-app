import express from "express";
import { deleteCard, getAllCards, getCardById, getCompletedCards, getNotCompletedCards, postCard, updateCard } from "../controllers/cards.controllers";

const cardsRounter = express.Router()

cardsRounter.post('/:listId', postCard)

cardsRounter.get('/', getAllCards)

cardsRounter.get('/completed', getCompletedCards)

cardsRounter.get('/notcompleted', getNotCompletedCards)

cardsRounter.get('/:cardId', getCardById)

cardsRounter.patch('/:cardId', updateCard)

cardsRounter.delete('/:cardId', deleteCard)

export default cardsRounter