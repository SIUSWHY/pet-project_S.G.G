import express from 'express'
import CharacterList from '../models/modelCharacterList'
import { CardType } from '../types/cardType';
const getCharacterList = express.Router();

getCharacterList.get('/characterlist', async (_req, res) => {
  const Characters: CardType[] = await CharacterList.find()
  res.json(Characters)
})

export default getCharacterList
