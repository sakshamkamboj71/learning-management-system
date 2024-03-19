import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { courseRouter } from "./routes/course.js";
import { lectureRouter } from "./routes/lecture.js";
import { modRouter } from "./routes/mods.js";
import { userRouter } from "./routes/user.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/mod-auth", modRouter);
app.use("/user-register", userRouter);
app.use("/courses", courseRouter);
app.use("/lectures", lectureRouter);

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to the database");
});

app.listen(8000, () => {
  console.log("listening to server 8000");
});
