import { model, Schema } from "mongoose"
import { UserType } from "../types/userType";

//ItemCard Schema
const NewUserShema = new Schema<UserType>({
  username: String,
  name: String,
  email: String,
  password: String,
  role: { type: String, default: "User" },
  avatar: { type: String, default: "@/spirit" },
  registerDate: Date,
})

export default model<UserType>('Users', NewUserShema);