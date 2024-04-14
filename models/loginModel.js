// loginModel.js
import { Schema, model } from 'mongoose';

const loginSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  phone:{type:Number,required:true}
});

const Login = model('Login', loginSchema);

export default Login;
