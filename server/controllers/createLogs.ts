import express from 'express';
import Logs from '../models/modelLog';
const CreateLogs = express.Router();

CreateLogs.post('/createLogs', async (req, res) => {
  const Log = await Logs.create(req.body);
  res.send(Log);
});

export default CreateLogs;
