import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ModNavBar from "./components/ModNavBar.js";

const ModHome = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const handleNavigateCourse = () => {
    navigate("/mod-add-course");
  };

  const token = window.localStorage.getItem("token");

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.post(
        "http://localhost:8000/courses/fetch-courses",
        { token }
      );
      setCourses(response.data.data);
    };
    fetchCourses();
  }, []);

  const handleClick = (e) => {
    navigate(`/mod-courses/${e.currentTarget.id}`);
  };

  return (
    <div>
      <ModNavBar />
      <div className="bg-gradient-to-tr from-[#1c1c1c] via-[#1f1f1f] to-[#222222] w-full h-screen enableScroll">
        <h1 className="text-white mt-16 text-center text-7xl py-20 select-none">
          My Courses
        </h1>
        <div className="w-full">
          <div className=" flex justify-center">
            <input
              className="p-3 w-1/2 bg-[#121212] text-white placeholder-gray-400 text-xl rounded-full px-8 mx-10 outline-none font-semibold"
              type="text"
              placeholder="Search . . ."
            />
            <div
              onClick={handleNavigateCourse}
              className="flex items-center justify-center p-4 text-3xl mx-10 rounded-full cursor-pointer border-2 border-[#72abfc] text-[#72abfc] hover:text-black hover:bg-[#72abfc] ease-in-out duration-150 transition"
            >
              <FaPlus />
            </div>
          </div>
          <div className="m-6 bg-[#121212] flex flex-wrap justify-center rounded-xl">
            {courses.map((course) => {
              return (
                <div
                  onClick={handleClick}
                  id={course.courseCode}
                  key={course.courseCode}
                  className="w-96 h-64 m-8 bg-[#050505] rounded-lg text-gray-200 border-2 border-gray-400 cursor-pointer"
                >
                  <img className="bg-cover" src={course.courseImg} alt="Img" />
                  <p className="text-center text-lg truncate">
                    {course.courseName}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModHome;
