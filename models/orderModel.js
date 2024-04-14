
import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  paymentID: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  dateTime: { type: Date, default: Date.now }, 
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true, match: /^[0-9]{10}$/ }, 
  numberOfPeople: { type: Number, required: true },
  email: { type: String, required: true },
});

const Order = model("Order", orderSchema);

export default Order;
