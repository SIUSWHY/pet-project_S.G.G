import express from 'express';
import Events from '../models/modelCalendarEvent';
const CreateNewCalendarEvent = express.Router();

CreateNewCalendarEvent.post('/createNewEvent', async (req, res) => {
  const Event = await Events.create(req.body);
  res.send(Event);
});

export default CreateNewCalendarEvent;
