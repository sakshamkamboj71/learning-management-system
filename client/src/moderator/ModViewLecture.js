import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import ModNavBar from "./components/ModNavBar";

const ModViewLecture = () => {
  const params = useParams();
  const token = window.localStorage.getItem("token");
  const [lecture, setLecture] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLecture = async () => {
      const response = await axios.post(
        "http://localhost:8000/lectures/fetch-single-lecture",
        {
          lecId: params.id2,
          token,
        }
      );
      setLecture(response.data.lecture);
    };
    fetchLecture();
  }, []);

  const handleClick = () => {
    navigate(`/mod-courses/${params.id}`);
  };

  console.log(params);

  return (
    <div>
      <ModNavBar />
      <div
        onClick={handleClick}
        className="fixed text-2xl top-24 left-6 p-2 select-none border-2 border-[#72abfc] text-[#72abfc] hover:text-black hover:bg-[#72abfc] font-semibold rounded-full cursor-pointer"
      >
        <IoMdArrowRoundBack />
      </div>
      <div className="pt-24 p-8 w-full h-screen bg-gradient-to-tr from-[#1c1c1c] via-[#1f1f1f] to-[#222222] text-white enableScroll px-20">
        <div className="px-20">
          <div className="border-2 border-gray-400 w-full h-[450px] aspect-w-16 aspect-h-9 rounded-md">
            <iframe
              className="w-full h-full outline-none rounded-md"
              title="lecture-video"
              src={lecture.lectureLink}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="text-4xl mb-4 mt-6  flex justify-between items-center mx-20">
          <h1 className="text-4xl text-[#72abfc] font-bold tracking-wide truncate">
            {lecture.lectureName}
          </h1>
        </div>
        <p className="text-lg mb-8 mx-20 pb-2 border-b-2 border-gray-400 ">
          {lecture.lectureDesc}
        </p>
      </div>
    </div>
  );
};

export default ModViewLecture;
