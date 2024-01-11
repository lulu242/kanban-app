import { NextFunction, Request, Response } from "express";
import Card from "../models/cards.model";
import List from "../models/lists.model";


async function postCard(req: Request, res: Response, next: NextFunction) {
  const newCard = new Card(req.body)
  try {
    await newCard.save();
    await List.findByIdAndUpdate(req.params.listId, { $push: { cards: newCard._id } });
  } catch (error) {
    return next(error);
  }
  res.status(201).json(newCard.toObject({getters: true}));
}


async function getCardById(req: Request, res: Response, next: NextFunction) {
  try {
    const card = await Card.findById(req.params.cardId);
    if (card) {
      res.status(200).json(card.toObject({getters: true}));
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
      req.body
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

export { postCard, getCardById, updateCard, deleteCard }