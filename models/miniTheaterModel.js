import { Schema, model } from 'mongoose';

const miniTheaterSchema = new Schema({
  price: { type: Number, required: true },
  numberOfPeople: { type: Number, required: true }
});

const MiniTheater = model('MiniTheater', miniTheaterSchema);

export default MiniTheater;
