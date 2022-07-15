import express from 'express';
import Logs from '../models/modelLog';
import { LogType } from '../types/logType';
const getLogs = express.Router();

getLogs.get('/logs', async (req, res, next) => {
  const LogList: LogType[] = await Logs.find();
  res.json(LogList);
});

export default getLogs;
