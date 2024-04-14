import { Schema, model } from 'mongoose';

const maxitheaterSchema = new Schema({
  price: { type: Number, required: true },
  numberOfPeople: { type: Number, required: true }
});

const MaxiTheater = model('MaxiTheater', maxitheaterSchema);

export default MaxiTheater;
