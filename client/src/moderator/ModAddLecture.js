import axios from "axios";
import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import ModNavBar from "./components/ModNavBar.js";

const ModAddLecture = () => {
  const [lectureName, setLectureName] = useState("");
  const [lectureDesc, setLectureDesc] = useState("");
  const [lectureLink, setLectureLink] = useState("");
  const params = useParams();

  const token = window.localStorage.getItem("token");

  const navigate = useNavigate();

  const handleLectureSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/lectures/add-lecture",
        {
          lectureName,
          lectureDesc,
          lectureLink,
          courseCode: params.id,
          token,
        }
      );

      if (response.data.error) {
        console.log(response.data.error);
        return;
      }

      if (response.data.message) {
        console.log(response.data.message);
      }
    } catch (err) {
      console.log(err);
    }

    navigate(`/mod-courses/${params.id}`);
  };

  const handleBack = () => {
    navigate(`/mod-courses/${params.id}`);
  };

  return (
    <div>
      <ModNavBar />
      <div
        onClick={handleBack}
        className="fixed text-2xl top-24 left-6 p-2 select-none border-2 border-[#72abfc] text-[#72abfc] hover:text-black hover:bg-[#72abfc] font-semibold rounded-full cursor-pointer"
      >
        <IoMdArrowRoundBack />
      </div>
      <div className="bg-gradient-to-tr from-[#1c1c1c] via-[#1f1f1f] to-[#222222] w-full h-screen enableScroll">
        <h1 className="text-white mt-4 text-center text-5xl pt-20 select-none">
          Add Lecture
        </h1>

        <div className="w-full">
          <form
            onSubmit={handleLectureSubmit}
            className="m-6 mx-40 text-xl bg-[#121212] flex flex-wrap rounded-xl p-12"
          >
            <label
              htmlFor="lectureName"
              className="text-white pl-2 select-none"
            >
              Lecture Name
            </label>
            <input
              className="text-lg w-full mt-3 border-[1px] border-gray-400 bg-[#121212] text-white outline-none p-2 focus:scale-[1.02] transition duration-150 rounded-md"
              type="text"
              id="lectureName"
              placeholder="Enter the lecture name"
              value={lectureName}
              autoComplete="off"
              onChange={(e) => setLectureName(e.target.value)}
            ></input>

            <label
              htmlFor="lectureDesc"
              className="text-white pl-2 mt-6 select-none"
            >
              Lecture Description
            </label>
            <input
              className="text-lg w-full mt-3 border-[1px] border-gray-400 bg-[#121212] text-white outline-none p-2 focus:scale-[1.02] transition duration-150 rounded-md"
              type="text"
              id="lectureDesc"
              placeholder="Enter the Lecture description"
              value={lectureDesc}
              autoComplete="off"
              onChange={(e) => setLectureDesc(e.target.value)}
            ></input>

            <label
              htmlFor="lectureLink"
              className="text-white pl-2 mt-6 select-none"
            >
              Embedded YouTube Video Link
            </label>
            <input
              className="text-lg w-full mt-3 border-[1px] border-gray-400 bg-[#121212] text-white outline-none p-2 focus:scale-[1.02] transition duration-150 rounded-md"
              type="text"
              id="lectureLink"
              placeholder="Enter the video link"
              value={lectureLink}
              autoComplete="off"
              onChange={(e) => setLectureLink(e.target.value)}
            />

            <div className="w-full mt-8 flex justify-center">
              <button
                type="submit"
                className="p-2 px-20 rounded-md font-semibold select-none border-2 border-[#72abfc] text-[#72abfc] hover:text-black hover:bg-[#72abfc] cursor-pointer  ease-in-out duration-150 transition"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModAddLecture;
