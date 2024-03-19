import mongoose from "mongoose";

const LectureSchema = new mongoose.Schema({
  lectureName: { type: String, required: true },
  lectureDesc: { type: String },
  lectureLink: { type: String, required: true },
  modId: { type: String, required: true },
  courseCode: { type: String, required: true },
});

export const LectureModel = new mongoose.model("lectures", LectureSchema);
