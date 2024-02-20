import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  const backgroundUrl =
    "https://wallpapercrafter.com/sizes/2560x1440/156051-black-abstract-dark-texture.jpg";
  return (
    <section
      className="bg-cover md:h-screen h-full enableScroll bg-center"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <Navbar />
      <div className="px-20 pt-5 md:text-left text-center">
        <h1 className="text-white text-3xl md:text-4xl">
          <span className="font-bold text-[#ffffff70] text-3xl md:text-4xl">
            01
          </span>{" "}
          About *name of website
        </h1>
        <div className="md:flex items- center md:justify-between pt-6">
          <img
            src="https://www.southernliving.com/thmb/oPUIz9yk5EDtEFVHpRr-PB7HeLc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-2674125-1-4b3455768dd2450297f8c3b288d6e0e6.jpg"
            className="md:w-[46%] w-[62%] md:py-0 py-4 md:mx-0 mx-auto"
          ></img>
          <div className="md:w-1/2">
            <ul className="text-white pb-4">
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 border-b-2 md:ml-2">
                About
              </li>
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4">
                Course
              </li>
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4">
                Whatever
              </li>
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4">
                Whatever
              </li>
            </ul>

            <h1 className="text-white w-full pb-2 text-7xl">About</h1>
            <p className="text-white text-sm md:w-2/3 md:pl-1 pb-10 leading-6 tracking-wide border-b-[0.5px] border-[#ffffff66] ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <div className="flex md:justify-between justify-around lg:w-1/2 w-auto pt-10">
              <div>
                <span className="text-[#d2d8f9] text-sm">Avg. Users</span>
                <h1 className="text-xl text-white">654,923</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
