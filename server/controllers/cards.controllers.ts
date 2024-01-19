import { NextFunction, Request, Response } from "express";
import Card from "../models/cards.model";
import List from "../models/lists.model";
import mongoose from "mongoose";
import HttpError from "../models/http-error";


async function postCard(req: Request, res: Response, next: NextFunction) {
  const listId = req.params.listId
  const newCard = new Card({...req.body, listId })

  let list
  try {
    list  = await List.findById(listId);
  } catch (error) {
    const err = new HttpError('find list failed', 500)
    return next(err);
  }

  if(!list) {
    const err = new HttpError('list not foundd', 401)
    return next(err)
  }

  try {
    const sess = await mongoose.startSession()
    sess.startTransaction()
    await newCard.save({session: sess});
    list.cards.push(newCard);
    await list.save({session: sess});
    await sess.commitTransaction()
  } catch (error) {
    const err = new HttpError('create card failed', 500)
    return next(err);
  }
  res.status(201).json(newCard.toObject({ getters: true }));
}

// TODO: card userid로 한번터 필터링 후 (사용용도 생각해보고 필요하면 수정하기)
async function getAllCards(req: Request, res: Response, next: NextFunction) {
  try {
    const allCards = await Card.find({});
    res.status(200).json(allCards.map(card => card.toObject()))
  } catch (error) {
    const err = new HttpError('get all cards failed', 500)
    next(err);
  }
}
// TODO: card userid로 한번터 필터링 후 CompletedCards 검색
async function getCompletedCards(req: Request, res: Response, next: NextFunction) {
  let allCards
  try {
    allCards = await Card.find({ completed: true });
  } catch (error) {
    const err = new HttpError('get complted cards failed', 500)
    next(err);
  }
  res.status(200).json(allCards?.map(card => card.toObject({ getters: true })))
}

// TODO: card userid로 한번터 필터링 후 Not CompletedCards 검색
async function getNotCompletedCards(req: Request, res: Response, next: NextFunction) {
  let allCards
  try {
    allCards = await Card.find({ completed: false });
  } catch (error) {
    const err = new HttpError('get not complted cards failed', 500)
    next(err);
  }
  res.status(200).json(allCards?.map(card => card.toObject({ getters: true })));
}

async function getCardById(req: Request, res: Response, next: NextFunction) {
  let card
  try {
    card = await Card.findById(req.params.cardId);
    if (!card) {
      const err = new HttpError('invaild cardId', 401)
      next(err)
    }
  } catch (error) {
    const err = new HttpError('get card by id failed', 500)
    next(err);
  }
  res.status(200).json(card?.toObject({ getters: true }));
}


async function updateCard(req: Request, res: Response, next: NextFunction) {
  let updatedCard
  try {
    updatedCard = await Card.findByIdAndUpdate(
      req.params.cardId,
      req.body,
      { new: true }
    )
    if (!updatedCard) {
      const err = new HttpError('invaild cardId', 401)
      next(err)
    }
  } catch (error) {
    const err = new HttpError('update card failed', 500)
    next(err);
  }
  res.status(200).json(updatedCard?.toObject({getters: true}));
}


async function deleteCard(req: Request, res: Response, next: NextFunction) {
  let deletedCard
  try {
    deletedCard = await Card.findByIdAndDelete(req.params.cardId);
    if (!deletedCard) {
      const err = new HttpError('invaild cardId', 401)
      next(err)
    } 
  } catch (error) {
    const err = new HttpError('delete card failed', 500)
    next(error);
  }
  res.status(200).json(deletedCard);
}

export { postCard, getAllCards, getCompletedCards, getNotCompletedCards, getCardById, updateCard, deleteCard }