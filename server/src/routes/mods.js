import bcrypt from "bcrypt";
import dotenv from "dotenv";
import express from "express";
import jwt from "jsonwebtoken";
dotenv.config();

import { UserModel } from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, email, password, age, phone } = req.body;

  try {
    //Email
    if (email === null || email === undefined || email === "") {
      return res.json({ error: "Please enter a valid E-mail" });
    }
    const emailExist = await UserModel.findOne({ email });
    if (emailExist) {
      return res.json({ error: "Email already exists" });
    }

    //Username
    if (username === null || username === undefined || username === "") {
      return res.json({ error: "Please enter a valid Username" });
    }
    const usernameExist = await UserModel.findOne({ username });
    if (usernameExist) {
      return res.json({ error: "Username already exists" });
    }
    if (username.length < 3) {
      console.log("working");
      return res.json({
        error: "Username can't be less than 3 characters",
      });
    }

    //Password
    if (password === null || password === undefined || password === "") {
      return res.json({ error: "Please enter a password" });
    }
    const plen = password.length;

    if (plen < 8 || plen > 16) {
      return res.json({ error: "Password must be 8-16 characters long" });
    }

    //Registering the User
    const hashedPassword = await bcrypt.hash(password, 10);

    const type = "moderator";

    const newMod = new UserModel({
      username,
      email,
      password: hashedPassword,
      type,
      age,
      phone,
    });
    await newMod.save();

    return res.json({ message: "Moderator Registered Successfully" });
  } catch (err) {
    console.error(err);
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    //Username
    if (username === null || username === undefined || username === "") {
      return res.json({ error: "Please enter a valid Username" });
    }

    const usernameExist = await UserModel.findOne({ username });
    if (!usernameExist) {
      return res.json({ error: "The Username you entered does not exist" });
    }

    const user = await UserModel.findOne({ username }); //Returns the corresponding user

    //Password
    if (password === null || password === undefined || password === "") {
      return res.json({ error: "Please enter a password" });
    }

    //Compares the password entered by the user to the password stored in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.json({
        error: "Username or Password you entered is Incorrect",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);

    return res.json({ token });
  } catch (err) {
    console.error(err);
  }
});

router.post("/verify", async (req, res) => {
  const { token } = req.body;

  const isValid = jwt.verify(token, process.env.SECRET_KEY, (err) => {
    if (err) {
      return false;
    } else {
      return true;
    }
  });

  return res.json({ tokenStatus: isValid });
});

export { router as modRouter };
