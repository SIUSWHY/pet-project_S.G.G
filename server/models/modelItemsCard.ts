import { model, Schema } from "mongoose"
import { CardType } from "../types/cardType"

//ItemCard Schema
const ItemCardSchema = new Schema<CardType>({
  to: String,
  img: String,
  title: String,
})

export default model<CardType>('ItemCards', ItemCardSchema);