import express from 'express';
import { verifyToken } from '../API/middleware/verifyToken';
import Events from '../models/modelCalendarEvent';
const DeleteEvent = express.Router();

DeleteEvent.delete('/deleteEvent', verifyToken, async (req, res) => {
  const { _id } = req.body;
  await Events.deleteOne({ _id });
  res.status(200).send({
    id: _id,
  });
});

export default DeleteEvent;
