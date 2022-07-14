import { model, Schema } from 'mongoose';
import { UserType } from '../types/userType';

//ItemCard Schema
const NewUserShema = new Schema<UserType>({
  hashPassword: String,
  username: String,
  name: String,
  email: String,
  role: { type: String, default: 'User' },
  avatar: {},
  date: String,
});

export default model<UserType>('Users', NewUserShema);
