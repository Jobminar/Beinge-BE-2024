
import { Schema, model } from "mongoose";

const bookingsSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: Number, required: true },
  numOfPeople: { type: Number, required: true },
});

const Bookings = model("Bookings", bookingsSchema);

export default Bookings;






