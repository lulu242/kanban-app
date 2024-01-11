import mongoose, { Schema } from "mongoose";
import { ICard } from "./cards.model"

interface IList extends Document {
  title: string
  cards: ICard[]
}

const listSchema: Schema = new Schema({
  title: { type: String, required: true },
  cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }],
});

const List = mongoose.model<IList>('List', listSchema);

export default List;


// const list = [
//   {
//     id: 0,
//     title: '진행 중',
//     cards: [
//       'cardid' , 'cardid', 'cardid'
//     ]
//   }
// ]

