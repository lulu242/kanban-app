import express, { Request, Response } from "express";
import boardRounter from "./routes/board.router";
import listsRounter from "./routes/lists.router";
import cardsRounter from "./routes/cards.router";

const app = express();

const PORT = 3000;

app.use(express.json())

app.get('/', (req:Request, res:Response) => {
  res.send('Welcome')
})

app.use('/board', boardRounter)
app.use('/lists', listsRounter)
app.use('/cards', cardsRounter)

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
