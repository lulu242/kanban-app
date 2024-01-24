import express, { Request, Response } from "express";
import userRouter from "./routes/user.router";
import listsRouter from "./routes/lists.router";
import cardsRouter from "./routes/cards.router";
import mongoose from "mongoose";

const app = express();

const PORT = 3001;

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Accexx-Control-Allow-Headers', 'Orgin, X-Requested-With, Content-Type, Accept, Authorization')
  res.setHeader('Access-Control_Allow-Methods', 'GET, POST, PUT, DELETE')
  next()
})
mongoose.connect('mongodb+srv://kanban:kanban3242@expressapp.btqyyca.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('db Connect'))
  .catch(err => console.log(err))

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome')
})

app.use('/user', userRouter)
app.use('/lists', listsRouter)
app.use('/cards', cardsRouter)

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
