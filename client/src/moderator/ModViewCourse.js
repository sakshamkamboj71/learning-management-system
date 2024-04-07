import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdEdit, MdOutlineRefresh } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import ModNavBar from "./components/ModNavBar";

const ModViewCourse = () => {
  const params = useParams();
  const [lectures, setLectures] = useState([]);
  const token = window.localStorage.getItem("token");
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);

  const [course, setCourse] = useState({});

  useEffect(() => {
    const fetchCourse = async () => {
      const response = await axios.post(
        "http://localhost:8000/courses/fetch-single-course",
        {
          token,
          courseID: params.id,
        }
      );

      setCourse(response.data.course);
    };
    const fetchLectures = async () => {
      const response = await axios.post(
        "http://localhost:8000/lectures/fetch-lectures",
        {
          courseCode: params.id,
        }
      );
      setLectures(response.data.lectures);
    };
    fetchCourse();
    fetchLectures();
  }, []);

  useEffect(() => {
    const fetchLectures = async () => {
      const response = await axios.post(
        "http://localhost:8000/lectures/fetch-lectures",
        {
          courseCode: params.id,
        }
      );
      setLectures(response.data.lectures);
    };
    fetchLectures();
  }, [refresh]);

  const handleAddLectureNav = () => {
    navigate(`/mod-add-lecture/${params.id}`);
  };

  const handleClick = (e) => {
    navigate(`/mod-view-lecture/${course.courseCode}/${e.currentTarget.id}`);
  };

  const handleBack = () => {
    navigate("/mod-home");
  };

  const handleEditLectureNav = () => {
    navigate(`/mod-edit-course/${course.courseCode}`);
  };

  const handleRefresh = () => {
    setRefresh(!refresh);
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
      <div className="pt-20 p-8 w-full h-screen bg-gradient-to-tr from-[#1c1c1c] via-[#1f1f1f] to-[#222222] text-white enableScroll px-20">
        <div className="text-4xl mb-4 mt-8 flex justify-between items-center mx-20">
          <h1 className="text-4xl font-bold tracking-wide truncate">
            {course.courseName}
          </h1>

          <div className="flex gap-2 items-center">
            <div
              onClick={handleRefresh}
              className="text-2xl flex justify-center p-2 mr-2 border-2 border-gray-200 text-gray-200 hover:text-black hover:bg-gray-200 ease-in-out duration-150 transition rounded-full cursor-pointer select-none flex items-center"
            >
              <MdOutlineRefresh />
            </div>
            <div
              onClick={handleEditLectureNav}
              className="text-2xl flex justify-center p-4 border-2 border-gray-200 text-gray-200 hover:text-black hover:bg-gray-200 ease-in-out duration-150 transition rounded-full cursor-pointer select-none flex items-center"
            >
              <MdEdit />
            </div>
            <div
              onClick={handleAddLectureNav}
              className="text-lg flex justify-center w-40 py-4 border-2 border-[#72abfc] text-[#72abfc] hover:text-black hover:bg-[#72abfc] ease-in-out duration-150 transition rounded-full cursor-pointer select-none flex items-center"
            >
              Add Lecture
            </div>
          </div>
        </div>
        <p className="text-lg mb-8 mx-20 pb-2 border-b-2">
          {course.courseDesc}
        </p>

        <div className="px-20">
          {lectures.map((lecture) => {
            console.log("working");
            return (
              <div
                id={lecture._id}
                key={lecture._id}
                onClick={handleClick}
                className="w-full border-2 border-gray-400 bg-[#121212] p-4 rounded-lg mb-4 flex justify-between items-center px-8 select-none cursor-pointer"
              >
                <p>{lecture.lectureName}</p>
                <div>
                  <i className="fa-solid fa-pen cursor-pointer rounded-full p-2 hover:bg-[#242424]"></i>
                  <i className="fa-solid fa-trash cursor-pointer rounded-full p-2 hover:bg-[#242424] mx-10"></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ModViewCourse;
