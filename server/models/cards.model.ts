import mongoose, { Document, Schema } from 'mongoose';

interface IChecklistItem {
  listTitle: { type: String, required: true },
  completed: boolean;
}

export interface ICard extends Document {
  title: string;
  description: string;
  deadline: Date;
  checklists: IChecklistItem[];
  label: string;
  completed: boolean;
  list_id: Schema.Types.ObjectId
}

const checklistItemSchema: Schema = new Schema({
  listTitle: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const cardSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  deadline: { type: Date },
  checklists: [checklistItemSchema],
  label: { type: String },
  completed: { type: Boolean, default: false },
  list_id: {type: Schema.Types.ObjectId, ref: 'List'}
});

const Card = mongoose.model<ICard>('Card', cardSchema);

export default Card;



// const cards = [
//   {
//     id: 0,
//     title: '할 일1',
//     description: '상세 설명',
//     deadlind: '2024.1.11',
//     checklists: [
//       {id: 1, list: '커피 마시기', completed: true},
//       {id: 2, list: '라떼 마시기', completed: false}
//     ],
//     label: '간식 먹기',
//     Completed : true
//   }
// ]

