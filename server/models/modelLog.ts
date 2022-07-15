import { model, Schema } from 'mongoose';
import { LogType } from '../types/logType';

//ItemCard Schema
const NewLogShema = new Schema<LogType>({
  color: String,
  name: String,
  date: String,
  message: String,
  adminId: String,
});

export default model<LogType>('Logs', NewLogShema);
