import mongoose, { Schema } from "mongoose";
import { IList } from "./lists.model";
import uniqueValidator from "mongoose-unique-validator"

interface IUser extends Document {
  title: string
  lists: IList[]
}

const userSchema: Schema = new Schema({
  userId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  lists: [{ type: Schema.Types.ObjectId, ref: 'List' }],
});

userSchema.plugin(uniqueValidator)

const User = mongoose.model<IUser>('User', userSchema);

export default User;