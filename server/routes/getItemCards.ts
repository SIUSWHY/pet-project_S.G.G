import express from 'express';
import ItemCards from '../models/modelItemsCard';
import { CardType } from '../types/cardType';
const getItemCards = express.Router();

getItemCards.get('/itemcards', async (_req, res) => {
  const Items: CardType[] = await ItemCards.find();
  res.json(Items);
});

export default getItemCards;
