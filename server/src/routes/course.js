import dotenv from "dotenv";
import express from "express";
import generatePassword from "generate-password";
import jwt from "jsonwebtoken";
import { CourseModel } from "../models/Courses.js";
dotenv.config();

const router = express.Router();

router.post("/add-course", (req, res) => {
  const { courseName, courseImg, courseDesc, token } = req.body;
  const courseCode = generatePassword.generate({
    length: 10,
    numbers: false,
  });

  if (courseName.length < 5) {
    return res.json({ error: "Course name must be atleast 5 characters long" });
  }

  if (courseDesc.length < 10) {
    return res.json({
      error: "Please provide a course description of atleast 10 characters",
    });
  }

  const decoded = jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
    if (err) {
      return res.json({ error: "User Session is not valid" });
    } else {
      return data;
    }
  });

  console.log(decoded);

  const newCourse = new CourseModel({
    courseName,
    courseImg,
    modId: decoded.id,
    courseCode,
    courseDesc,
  });
  newCourse.save();

  res.json({ message: "Course added successfully" });
});

router.post("/fetch-courses", async (req, res) => {
  const { token } = req.body;

  const decoded = jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
    if (err) {
      return res.send({ error: "User Session is not valid" });
    } else {
      return data;
    }
  });

  try {
    const courses = await CourseModel.find({ modId: decoded.id });
    res.send({ status: "ok", data: courses });
  } catch (err) {
    console.log(err);
  }
});

router.post("/fetch-single-course", async (req, res) => {
  const { token, courseID } = req.body;

  const decoded = jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
    if (err) {
      return res.send({ error: "User Session is not valid" });
    } else {
      return data;
    }
  });

  try {
    const course = await CourseModel.findOne({ courseCode: courseID });
    res.send({ status: "ok", course: course });
  } catch (err) {
    console.log(err);
  }
});

router.post("/edit-course-img", async (req, res) => {
  const { token, courseCode, courseImg } = req.body;

  const decoded = jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
    if (err) {
      return res.send({ error: "User Session is not valid" });
    } else {
      return data;
    }
  });

  // console.log(decoded.id);
  console.log(courseCode);

  const course = await CourseModel.find({ courseCode: courseCode });
  console.log(course[0]._id);

  try {
    const response = await CourseModel.findByIdAndUpdate(
      { _id: course[0]._id },
      { courseImg: courseImg },
      { new: true }
    );
  } catch (err) {
    console.log(err);
    return res.json({ error: "Error occurred" });
  }

  console.log("working");
  return res.json({ message: "Working" });
});

export { router as courseRouter };
