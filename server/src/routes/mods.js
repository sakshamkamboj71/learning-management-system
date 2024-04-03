import bcrypt from "bcrypt";
import dotenv from "dotenv";
import express from "express";
import jwt from "jsonwebtoken";
dotenv.config();

import { UserModel } from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const {
    username,
    email,
    firstName,
    middleName,
    lastName,
    password,
    age,
    phone,
    profilePic,
  } = req.body;

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

    //FirstName MiddleName LastName
    if (firstName == null || firstName == undefined || firstName == "") {
      return res.json({ error: "Please provide your first name" });
    }

    //Registering the User
    const hashedPassword = await bcrypt.hash(password, 10);

    const type = "moderator";

    const newMod = new UserModel({
      username,
      email,
      firstName,
      middleName,
      lastName,
      password: hashedPassword,
      type,
      age,
      phone,
      profilePic,
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

router.post("/verify-mod", async (req, res) => {
  const { token } = req.body;

  var flag = false;

  const userInfo = jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
    if (err) {
      flag = false;
      return err;
    } else {
      flag = true;
      return data;
    }
  });

  const user = await UserModel.findOne({ _id: userInfo.id });

  if (user == null) {
    return;
  }

  if (flag && user.type === "moderator") {
    return res.json({ tokenStatus: true });
  } else {
    return res.json({ tokenStatus: false });
  }
});

router.post("/fetch-user-details", async (req, res) => {
  const { token } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
      if (err) {
        throw { err: err };
      } else {
        return data;
      }
    });

    const user = await UserModel.findOne({ _id: decoded.id });

    return res.json({ user });
  } catch (err) {
    console.log(err);
  }
});

export { router as modRouter };
