import bcrypt from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken";

import { ModModel } from "../models/Mod.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, email, password, age, phone } = req.body;

  try {
    //Username
    if (username === null || username === undefined || username === "") {
      res.json({ error: "Please enter a valid Username" });
    }
    const usernameExist = await ModModel.findOne({ username });
    if (usernameExist) {
      res.json({ error: "Username already exists" });
    }
    if (username.length < 3) {
      return res.json({
        error: "Username can't be less than 3 characters",
      });
    }

    //Email
    if (email === null || email === undefined || email === "") {
      res.json({ error: "Please enter a valid E-mail" });
    }
    const emailExist = await ModModel.findOne({ email });
    if (emailExist) {
      res.json({ error: "Email already exists" });
    }

    //Password
    if (password === null || password === undefined || password === "") {
      res.json({ error: "Please enter a password" });
    }
    const plen = password.length;

    if (plen < 8 || plen > 16) {
      res.json({ error: "Password must be 8-16 characters long" });
    }

    //Registering the User
    const hashedPassword = await bcrypt.hash(password, 10);

    const newMod = new ModModel({
      username,
      email,
      password: hashedPassword,
      age,
      phone,
    });
    await newMod.save();

    res.json({ message: "Moderator Registered Successfully" });
  } catch (err) {
    console.error(err);
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    //Username
    if (username === null || username === undefined || username === "") {
      res.json({ error: "Please enter a valid Username" });
    }

    const usernameExist = await ModModel.findOne({ username });
    if (!usernameExist) {
      res.json({ error: "The Username you entered does not exist" });
    }

    const user = await ModModel.findOne({ username }); //Returns the corresponding user

    //Password
    if (password === null || password === undefined || password === "") {
      res.json({ error: "Please enter a password" });
    }

    //Compares the password entered by the user to the password stored in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.json({
        error: "Username or Password you entered is Incorrect",
      });
    }

    const token = jwt.sign({ id: user._id }, "secret", { expiresIn: 30 });

    res.json({ token });
  } catch (err) {
    console.error(err);
  }
});

router.post("/verify", async (req, res) => {
  const { token } = req.body;

  const isValid = jwt.verify(token, "secret", (err, decoded) => {
    if (err) {
      return false;
    } else {
      return true;
    }
  });

  res.json({ tokenStatus: isValid });
});

export { router as modRouter };
