import mongoose, { Schema } from "mongoose";
import { IList } from "./lists.model";
import uniqueValidator from "mongoose-unique-validator"

interface IUser extends Document {
  userId: string
  password: string
  lists: IList[]
}

const userSchema: Schema = new Schema({
  userId: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  lists: [{ type: Schema.Types.ObjectId, ref: 'List' }],
});

userSchema.plugin(uniqueValidator)

const User = mongoose.model<IUser>('User', userSchema);

export default User;