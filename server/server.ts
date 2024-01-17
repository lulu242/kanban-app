import express, { Request, Response } from "express";
import userRouter from "./routes/user.router";
import listsRouter from "./routes/lists.router";
import cardsRouter from "./routes/cards.router";
import mongoose from "mongoose";

const app = express();

const PORT = 3000;

app.use(express.json())

mongoose.connect('mongodb+srv://kanban:kanban3242@expressapp.btqyyca.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('db Connect'))
  .catch(err => console.log(err))

app.get('/', (req:Request, res:Response) => {
  res.send('Welcome')
})

app.use('/user', userRouter)
app.use('/lists', listsRouter)
app.use('/cards', cardsRouter)

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
