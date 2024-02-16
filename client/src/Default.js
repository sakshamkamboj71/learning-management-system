import React from "react";
import { FaUserGear } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { RiAdminFill } from "react-icons/ri";

const Default = () => {
  const backgroundUrl =
    "https://wallpapercrafter.com/sizes/2560x1440/156051-black-abstract-dark-texture.jpg";
  return (
    <div
      className="w-full h-screen block sm:flex flex-col xl:flex-row select-none"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="block sm:flex sm:flex-row w-full h-2/3 sm:h-1/2 xl:h-full xl:w-2/3">
        <div className="w-full sm:w-1/2 h-1/2 sm:h-full p-2 sm:p-4 xl:p-10 cursor-pointer">
          <div className="flex sm:block items-center justify-between px-4 bg-black w-full h-full text-gray-400 hover:text-[#d872fc] hover-scale-[1.03] sm:hover:scale-[1.05] hover:border-[#d872fc] hover:border-2 rounded-lg border-gray-400 border-2">
            <div>
              <h1 className="text-xl sm:text-3xl lg:text-4xl text-center font-semibold sm:pt-4">
                Sign in as
              </h1>
              <h1 className="text-[#d872fc] text-2xl sm:text-4xl lg:text-6xl text-center font-bold sm:mt-8">
                Student
              </h1>
            </div>
            <div className="flex justify-center items-center text-[50px] sm:text-[100px] xl:text-[250px] sm:w-full sm:mt-10 xl:mt-36">
              <PiStudentFill />
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 h-1/2 sm:h-full border-black p-2 sm:p-4 xl:p-10 cursor-pointer">
          <div className="flex sm:block items-center justify-between px-4  bg-black w-full h-full text-gray-400 hover:text-[#72abfc] hover-scale-[1.03] sm:hover:scale-[1.05] hover:border-[#72abfc] hover:border-2 rounded-lg border-gray-400 border-2">
            <div>
              <h1 className="text-xl sm:text-3xl lg:text-4xl text-center font-semibold sm:pt-4">
                Sign in as
              </h1>
              <h1 className="text-[#72abfc] text-2xl sm:text-4xl lg:text-6xl text-center font-bold sm:mt-8">
                Moderator
              </h1>
            </div>

            <div className="flex justify-center items-center text-[50px] sm:text-[100px] xl:text-[250px] sm:w-full sm:mt-10 xl:mt-36">
              <FaUserGear />
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full xl:w-1/3 h-1/3 sm:h-1/2 xl:h-full border-black p-2 sm:p-4 xl:p-10 cursor-pointer">
        <div className="flex sm:block items-center justify-between px-4 bg-black w-full h-full text-gray-400 hover:text-[#ffcf69] hover-scale-[1.03] xl:hover:scale-[1.05] hover:border-[#ffcf69] hover:border-2 rounded-lg border-gray-400 border-2">
          <div>
            <h1 className="text-xl sm:text-3xl lg:text-4xl text-center font-semibold sm:pt-4">
              Sign in as
            </h1>
            <h1 className="text-[#ffcf69] text-2xl sm:text-4xl lg:text-6xl text-center font-bold sm:mt-8">
              Admin
            </h1>
          </div>

          <div className="flex justify-center items-center text-[50px] sm:text-[100px] xl:text-[250px] sm:w-full sm:mt-10 xl:mt-36">
            <RiAdminFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Default;
