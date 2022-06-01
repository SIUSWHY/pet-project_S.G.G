import express from 'express';
import Events from '../models/modelCalendarEvent';
import { EventType } from '../types/eventType';
const getCalendareEvents = express.Router();

getCalendareEvents.get('/events', async (req, res, next) => {
  const EventsList: EventType[] = await Events.find();
  res.json(EventsList);
});

export default getCalendareEvents;
