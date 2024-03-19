import React from "react";
import { useNavigate } from "react-router-dom";

const ModNavBar = () => {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/mod-home");
  };

  const handleProfileNav = () => {
    navigate("/mod-profile");
  };
  return (
    <div className="bg-[#121212] w-full flex justify-between text-white h-16 fixed top-0">
      <div
        onClick={handleNav}
        className="text-4xl text-[#72abfc] flex items-center justify-center px-8 select-none cursor-pointer"
      >
        Iselda
      </div>
      <div className="flex items-center h-full font-bold">
        <div className="select-none h-full flex items-center justify-center min-w-28 px-4 hover:bg-[#242424] cursor-pointer ease-in-out duration-150 transition">
          Browse
        </div>
        <div
          onClick={handleProfileNav}
          className="select-none h-full flex items-center justify-center min-w-28 px-4 hover:bg-[#242424] cursor-pointer ease-in-out duration-150 transition"
        >
          Profile
        </div>
        <div className="select-none border-2 border-[#72abfc] text-[#72abfc] h-full flex items-center justify-center min-w-28 px-4 hover:text-black hover:bg-[#72abfc] cursor-pointer  ease-in-out duration-150 transition">
          Logout
        </div>
      </div>
    </div>
  );
};

export default ModNavBar;
