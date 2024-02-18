import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  type: { type: String, required: true },
  age: { type: Number },
  phone: { type: Number },
});

export const UserModel = new mongoose.model("users", UserSchema);
