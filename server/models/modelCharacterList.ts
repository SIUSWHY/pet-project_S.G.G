import { model, Schema } from "mongoose"
import { CardType } from "../types/cardType"

//ItemCard Schema
const CharacterListShema = new Schema<CardType>({
  to: String,
  img: String,
  title: String,
})

export default model<CardType>('CharacterList', CharacterListShema);