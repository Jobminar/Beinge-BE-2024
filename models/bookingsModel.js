
import { Schema, model } from "mongoose";

const bookingsSchema = new Schema({
  name: { type: String, required: true },
  mailID: { type: String, required: true },
  phone: { type: Number, required: true },
  numberOfPeople: { type: Number, required: true },
});

const Bookings = model("Bookings", bookingsSchema);

export default Bookings;
