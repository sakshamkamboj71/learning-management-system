import bcrypt from "bcrypt";
import dotenv from "dotenv";
import express from "express";
dotenv.config();

import { UserModel } from "../models/User.js";

const router = express.Router();

//-----------------Register for user
router.post("/register", async (req, res) => {
  const { username, password, email, age, phone } = req.body;

  try {
    // username
    if (username === "" || username === undefined || username === null) {
      return res.json({
        error: "please enter an a valid username",
      });
    }
    const userExist = await UserModel.findOne({ username });
    if (userExist) {
      return res.json({
        error: "User already exist",
      });
    }

    //Email
    if (email === "" || email === undefined || email === null) {
      return res.json({
        error: "please enter an a valid email",
      });
    }
    const emailExist = await UserModel.findOne({ username });
    if (emailExist) {
      return res.json({
        error: "User already exist",
      });
    }

    //password
    if (password === "" || password === undefined || password === null) {
      return res.json({
        error: "please enter an a valid password",
      });
    }
    const passwordLen = await UserModel.findOne({ password });
    if (passwordLen < 8 && passwordLen > 16) {
      return res.json({
        error: "Password must be 8-16 characters long",
      });
    }

    //registering user
    const encryptedPassword = await bcrypt.hash(password, 10);

    const type = "user";

    const updatedModel = new UserModel({
      username,
      email,
      password: encryptedPassword,
      age,
      phone,
      type,
    });

    await updatedModel.save();
    return res.json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
  }
});

export { router as userRouter };
