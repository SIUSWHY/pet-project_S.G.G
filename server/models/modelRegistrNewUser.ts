import { model, Schema } from 'mongoose';
import { UserType } from '../types/userType';

//ItemCard Schema
const NewUserShema = new Schema<UserType>({
  hashPassword: String,
  username: String,
  name: String,
  email: String,
  role: { type: String, default: 'User' },
  avatar: {
    type: String,
    default: 'GamePosters/Hages/HadesMainComposition/Characters/FP_Chaos.png',
  },
  registerDate: Date,
});

export default model<UserType>('Users', NewUserShema);
