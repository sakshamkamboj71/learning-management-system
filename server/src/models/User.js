import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  firstName: { type: String },
  middleName: { type: String },
  lastName: { type: String },
  password: { type: String, required: true },
  type: { type: String, required: true },
  firstname: { type: String },
  lastname: { type: String },
  age: { type: Number },
  phone: { type: Number },
  profilePic: { type: String },
});

export const UserModel = new mongoose.model("users", UserSchema);
