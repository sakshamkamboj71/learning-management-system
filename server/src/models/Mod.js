import mongoose from "mongoose";

const ModSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: Number },
  phone: { type: Number },
});

export const ModModel = mongoose.model("moderator", ModSchema);
