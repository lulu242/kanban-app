import express from "express";
import { deleteList, getLists, postList, updateList } from "../controllers/lists.controllers";

const listsRounter = express.Router()

listsRounter.get('/', getLists)

listsRounter.post('/', postList)

listsRounter.patch('/listId', updateList)

listsRounter.delete('/:listId', deleteList)

export default listsRounter