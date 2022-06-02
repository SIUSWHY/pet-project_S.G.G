import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import getItemCards from './routes/getItemCards';
import getCharacterList from './routes/getCharacterList';
import getAllMenuItems from './routes/getAllMenuItems';
import CreateNewUser from './controllers/registration';
import LoginUser from './controllers/login';
import getUsers from './routes/getUsers';
import DeleteUsers from './controllers/deleteUsers';
import CreateNewCalendarEvent from './controllers/sendCalendarEvent';
import getCalendareEvents from './routes/getCalendareEvents';
import DeleteEvent from './controllers/deleteEvent';

async function run() {
  const app = express();
  const port = 3000;

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.json());

  await mongoose.connect('mongodb://localhost:27017/Project');

  app.use([
    getItemCards,
    getCharacterList,
    getAllMenuItems,
    CreateNewUser,
    LoginUser,
    getUsers,
    DeleteUsers,
    CreateNewCalendarEvent,
    getCalendareEvents,
    DeleteEvent,
  ]);

  app.listen(port, () =>
    console.log(`
  Example app listening on port ${port}!
  `)
  );
}

run();
