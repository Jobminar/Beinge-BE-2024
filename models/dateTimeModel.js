// models/dateTimeModel.js
import { Schema, model } from 'mongoose';

const dateTimeSchema = new Schema({
  date: { type: Date, required: true },
  availability: { type: Boolean, required: true },
  numberOfPeople: { type: Number, required: true },
  time: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
});

const DateTime = model('DateTime', dateTimeSchema);

export default DateTime;
