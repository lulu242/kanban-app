import express from "express";
import { deleteList, getLists, postList, updateList } from "../controllers/lists.controllers";
import { check } from "express-validator";

const listsRounter = express.Router()

listsRounter.get('/', getLists)

listsRounter.post('/',
  check('title').not().isEmpty()
  , postList)

listsRounter.patch('/:listId', updateList)

listsRounter.delete('/:listId', deleteList)

export default listsRounter