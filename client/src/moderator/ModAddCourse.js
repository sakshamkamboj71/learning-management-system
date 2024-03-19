import axios from "axios";
import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ModNavBar from "./components/ModNavBar";

const ModAddCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [courseDesc, setCourseDesc] = useState("");
  const [courseImg, setCourseImg] = useState("");

  const [error, setError] = useState();
  const token = window.localStorage.getItem("token");

  const navigate = useNavigate();

  const handleCourseSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost:8000/courses/add-course",
      {
        courseName,
        courseDesc,
        courseImg,
        token,
      }
    );

    if (response.data.error) {
      console.log(response.data.error);
      setError(response.data.error);
      return;
    }

    console.log(response.data.message);
    navigate("/mod-home");
  };

  const handleBack = () => {
    navigate("/mod-home");
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
          Add Course
        </h1>

        <div className="w-full">
          <form
            onSubmit={handleCourseSubmit}
            className="m-6 mx-40 text-xl bg-[#121212] flex flex-wrap rounded-xl p-12"
          >
            <label htmlFor="courseName" className="text-white pl-2 select-none">
              Course Name
            </label>
            <input
              className="text-lg w-full mt-3 border-[1px] border-gray-400 bg-[#121212] text-white outline-none p-2 focus:scale-[1.02] transition duration-150 rounded-md"
              type="text"
              id="courseName"
              placeholder="Enter the course name"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            ></input>

            <label
              htmlFor="courseDesc"
              className="text-white pl-2 mt-6 select-none"
            >
              Course Description
            </label>
            <input
              className="text-lg w-full mt-3 border-[1px] border-gray-400 bg-[#121212] text-white outline-none p-2 focus:scale-[1.02] transition duration-150 rounded-md"
              type="text"
              id="courseDesc"
              placeholder="Enter the course description"
              value={courseDesc}
              autoComplete="off"
              onChange={(e) => setCourseDesc(e.target.value)}
            ></input>

            <label
              htmlFor="courseImg"
              className="text-white pl-2 mt-6 select-none"
            >
              Image URL
            </label>
            <input
              className="text-lg w-full mt-3 border-[1px] border-gray-400 bg-[#121212] text-white outline-none p-2 focus:scale-[1.02] transition duration-150 rounded-md"
              type="text"
              id="courseImg"
              placeholder="Enter image URL"
              value={courseImg}
              onChange={(e) => setCourseImg(e.target.value)}
            ></input>

            <div className="w-full mt-8 flex justify-center">
              <button
                type="submit"
                className="p-2 px-20 rounded-md font-semibold select-none border-2 border-[#72abfc] text-[#72abfc] hover:text-black hover:bg-[#72abfc] cursor-pointer  ease-in-out duration-150 transition"
              >
                Create
              </button>
            </div>
          </form>
          {error && (
            <div className="w-full text-white flex justify-center">
              <p className="p-2 border-2 border-red-800 w-auto rounded-md">
                {error}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModAddCourse;
