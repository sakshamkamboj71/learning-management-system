import React from "react";

const ModNavBar = () => {
  return (
    <div className="bg-[#121212] w-full flex justify-between text-white h-16 fixed">
      <div className="text-4xl text-[#72abfc] flex items-center justify-center px-8 select-none">
        Iselda
      </div>
      <div className="flex items-center h-full font-bold">
        <div className="select-none h-full flex items-center justify-center px-4 hover:bg-[#242424] cursor-pointer ease-in-out duration-150 transition">
          Browse
        </div>
        <div className="select-none border-2 border-[#72abfc] text-[#72abfc] h-full flex items-center justify-center px-4 hover:text-black hover:bg-[#72abfc] cursor-pointer  ease-in-out duration-150 transition">
          Logout
        </div>
      </div>
    </div>
  );
};

export default ModNavBar;
