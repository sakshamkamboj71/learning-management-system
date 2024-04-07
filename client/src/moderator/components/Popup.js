import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Popup = (props) => {
  const params = useParams();
  const token = window.localStorage.getItem("token");
  console.log(params.id);
  const handleButtonFunc = () => {
    props.setPop(false);
  };
  const handleSave = async () => {
    const response = await axios.post(
      "http://localhost:8000/courses/edit-course-img",
      {
        token,
        courseCode: params.id,
        courseImg,
      }
    );
  };
  const [courseImg, setCourseImg] = useState("");
  return (
    <div className="h-screen w-full enableScroll flex justify-center items-center bg-gradient-to-tr from-[#1c1c1c] via-[#1f1f1f] to-[#222222] text-lg">
      <div className="w-1/2 bg-[#060606] text-white p-8 rounded-md border-2 border-gray-400">
        <h1 className="text-center text-3xl mb-4">Change Course Image</h1>
        <input
          className="w-full outline-none p-2 focus:scale-[1.02] bg-[#232323] border-gray-400 border-b-2 text-white placeholder-gray-400 transition duration-150 rounded-md"
          type="text"
          id="profilePic"
          placeholder="Enter Course image link"
          value={courseImg}
          onChange={(e) => {
            setCourseImg(e.target.value);
          }}
        />

        <div className="flex justify-between select-none">
          <div
            onClick={handleButtonFunc}
            className="p-2 px-6 border-2 border-[#ff4a4a] text-[#ff4a4a] hover:text-black hover:bg-[#ff4a4a] font-semibold mt-4 rounded-md cursor-pointer"
          >
            Cancel
          </div>
          <div
            onClick={handleSave}
            className="p-2 px-6 border-2 border-[#72abfc] text-[#72abfc] hover:text-black hover:bg-[#72abfc] font-semibold mt-4 rounded-md cursor-pointer"
          >
            Save
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
