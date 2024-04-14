// userModel.js

import { Schema, model } from "mongoose";

const userSchema = new Schema({
  sNo: { type: Number, required: true },
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  date: { type: Date, required: true },
});

const User = model("User", userSchema);

export default User;
