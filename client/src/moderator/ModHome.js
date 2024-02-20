import React from "react";
import { FaPlus } from "react-icons/fa6";
import ModNavBar from "./components/ModNavBar.js";

const ModHome = () => {
  return (
    <div>
      <ModNavBar />
      <div className="bg-gradient-to-tr from-[#1c1c1c] via-[#1f1f1f] to-[#222222] w-full h-screen enableScroll">
        <h1 className="text-white mt-16 text-center text-7xl py-20 select-none">
          MY COURSES
        </h1>
        <div className="w-full">
          <div className=" flex justify-center">
            <input
              className="p-3 w-1/2 bg-[#121212] text-white placeholder-white text-xl rounded-full px-8 mx-10 outline-none font-semibold"
              type="text"
              placeholder="Search . . ."
            />
            <div className="flex items-center justify-center p-4 text-3xl mx-10 rounded-full cursor-pointer border-2 border-[#72abfc] text-[#72abfc] hover:text-black hover:bg-[#72abfc] ease-in-out duration-150 transition">
              <FaPlus />
            </div>
          </div>
          <div className="m-6 bg-[#121212] flex flex-wrap justify-center rounded-xl">
            <div className="w-96 h-64 m-8 bg-[#050505] rounded-lg">h</div>
            <div className="w-96 h-64 m-8 bg-[#050505] rounded-lg">h</div>
            <div className="w-96 h-64 m-8 bg-[#050505] rounded-lg">h</div>
            <div className="w-96 h-64 m-8 bg-[#050505] rounded-lg">h</div>
            <div className="w-96 h-64 m-8 bg-[#050505] rounded-lg">h</div>
            <div className="w-96 h-64 m-8 bg-[#050505] rounded-lg">h</div>
            <div className="w-96 h-64 m-8 bg-[#050505] rounded-lg">h</div>
            <div className="w-96 h-64 m-8 bg-[#050505] rounded-lg">h</div>
            <div className="w-96 h-64 m-8 bg-[#050505] rounded-lg">h</div>
            <div className="w-96 h-64 m-8 bg-[#050505] rounded-lg">h</div>
            <div className="w-96 h-64 m-8 bg-[#050505] rounded-lg">h</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModHome;
