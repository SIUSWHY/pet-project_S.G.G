import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'
import getItemCards from './routes/getItemCards'
import getCharacterList from './routes/getCharacterList';
import allMenuItems from './routes/getAllMenuItems';

async function run() {
  const app = express();
  const port = 3000;

  // const db = mongoose.connection;
  // db.on('error', console.error.bind(console, 'connection error:'));
  // db.once('open', function () {
  //   console.log('MongoDB running');
  // });

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.json());

  await mongoose.connect('mongodb://localhost:27017/Project');

  app.use(getItemCards);
  app.use(getCharacterList);
  app.use(allMenuItems);

  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}

run();

