import express from 'express'
import modelCharacterList from '../models/modelCharacterList';
import ItemCards from '../models/modelItemsCard'
import { CardType } from '../types/cardType';
const allMenuItems = express.Router();

allMenuItems.get('/allMenuItems', async (_req, res) => {
  const Items: CardType[] = await ItemCards.find();
  const Characters: CardType[] = await modelCharacterList.find();
  Promise.all([Items, Characters]);
  res.json({
    Items, Characters
  });
});

export default allMenuItems
