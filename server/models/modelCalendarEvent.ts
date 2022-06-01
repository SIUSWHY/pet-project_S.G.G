import { model, Schema } from 'mongoose';
import { EventType } from '../types/eventType';

//ItemCard Schema
const NewEventShema = new Schema<EventType>({
  color: String,
  end: String,
  name: String,
  start: String,
  timed: String,
});

export default model<EventType>('Events', NewEventShema);
