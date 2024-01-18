import { NextFunction, Request, Response } from "express";
import Card from "../models/cards.model";
import List from "../models/lists.model";
import mongoose from "mongoose";


async function postCard(req: Request, res: Response, next: NextFunction) {
  const newCard = new Card(req.body)

  let list
  try {
    list  = await List.findById(req.params.listId);
  } catch (error) {
    return next(error);
  }

  if(!list) {
    return next()
  }

  try {
    const sess = await mongoose.startSession()
    sess.startTransaction()
    await newCard.save({session: sess});
    list.cards.push(newCard);
    await list.save({session: sess});
    await sess.commitTransaction()
  } catch (error) {
    return next(error);
  }
  res.status(201).json(newCard.toObject({ getters: true }));
}

async function getAllCards(req: Request, res: Response, next: NextFunction) {
  try {
    const allCards = await Card.find({});
    res.status(200).json(allCards);
  } catch (error) {
    next(error);
  }
}

async function getCompletedCards(req: Request, res: Response, next: NextFunction) {
  try {
    const allCards = await Card.find({ completed: true });
    res.status(200).json(allCards);
  } catch (error) {
    next(error);
  }
}

async function getNotCompletedCards(req: Request, res: Response, next: NextFunction) {
  try {
    const allCards = await Card.find({ completed: false });
    res.status(200).json(allCards);
  } catch (error) {
    next(error);
  }
}

async function getCardById(req: Request, res: Response, next: NextFunction) {
  try {
    const card = await Card.findById(req.params.cardId);
    if (card) {
      res.status(200).json(card.toObject({ getters: true }));
    } else {
      res.status(404).send();
    }
  } catch (error) {
    next(error);
  }
}


async function updateCard(req: Request, res: Response, next: NextFunction) {
  try {
    let updatedCard = await Card.findByIdAndUpdate(
      req.params.cardId,
      req.body,
      { new: true }
    )

    if (updatedCard) {
      res.status(200).json(updatedCard);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    next(error);
  }
}


async function deleteCard(req: Request, res: Response, next: NextFunction) {
  try {
    let deletedCard = await Card.findByIdAndDelete(req.params.cardId);
    if (deletedCard) {
      res.status(200).json(deletedCard);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    next(error);
  }
}

export { postCard, getAllCards, getCompletedCards, getNotCompletedCards, getCardById, updateCard, deleteCard }