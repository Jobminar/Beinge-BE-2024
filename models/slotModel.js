import { Schema, model } from "mongoose";

const slotSchema = new Schema({
  date: { type: Date, required: true },
  availability: { type: Boolean, default: true },
  numberOfPeople: { type: Number, required: true },
  time: { type: String, required: true },
  price: { type: Number, required: true },
});

const Slot = model("Slot", slotSchema);

export default Slot;
