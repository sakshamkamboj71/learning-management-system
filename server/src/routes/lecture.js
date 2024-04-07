import dotenv from "dotenv";
import express from "express";
import jwt from "jsonwebtoken";
import { LectureModel } from "../models/Lecture.js";
dotenv.config();

const router = express.Router();

router.post("/add-lecture", (req, res) => {
  const { lectureName, lectureDesc, lectureLink, courseCode, token } = req.body;

  try {
    if (
      lectureName == null ||
      lectureName == undefined ||
      lectureName == "" ||
      lectureName.length < 3
    ) {
      return res.json({ error: "LectureName must have atleast 3 characters" });
    }

    try {
      const url = new URL(lectureLink);
    } catch {
      throw "URL IS NOT VALID";
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
      if (err) {
        return res.json({ error: "User Session is not valid" });
      } else {
        return data;
      }
    });

    const modId = decoded.id;

    const newLecture = new LectureModel({
      lectureName,
      lectureDesc,
      lectureLink,
      courseCode,
      modId,
    });

    newLecture.save();
  } catch (err) {
    console.log(err);

    return res.json({ error: "URL is not Valid" });
  }

  return res.json({
    message: "Added Lecture Successfully",
  });
});

router.post("/fetch-lectures", async (req, res) => {
  const { courseCode } = req.body;

  const lectures = await LectureModel.find({ courseCode });

  res.json({ lectures });
});

router.post("/fetch-single-lecture", async (req, res) => {
  const { lecId, token } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
      if (err) {
        return err;
      } else {
        return data;
      }
    });
    const lecture = await LectureModel.findOne({ _id: lecId });

    if (decoded.id != lecture.modId) {
      return res.json({
        error: "You don't have permissions to access this course",
      });
    }
    return res.json({ lecture });
  } catch (err) {
    return res.json({ err });
  }
});

router.post("/delete-single-lecture", async (req, res) => {
  const { token, lectureId } = req.body;

  const decoded = jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
    if (err) {
      return res.send({ error: "User Session is not valid" });
    } else {
      return data;
    }
  });

  // console.log(decoded.id);
  // this has an error
  try {
    await LectureModel.findByIdAndDelete({ _id: lectureId });

    res.json({ message: "DELETED" });
  } catch (err) {
    console.log(err);
    res.json({ error: err });
  }
});

export { router as lectureRouter };
