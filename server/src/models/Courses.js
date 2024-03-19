import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  courseCode: { type: String },
  courseName: { type: String, required: true },
  courseDesc: { type: String, required: true },
  courseImg: { type: String },
  modId: { type: String },
});

export const CourseModel = new mongoose.model("courses", CourseSchema);
