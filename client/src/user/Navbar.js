import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  const Links = [
    { name: "About" },
    { name: "COURSE" },
    { name: "LOGIN" },
    { name: "SIGNUP" },
  ];

  return (
    <nav className="flex items-center justify-between pt-5">
      {open ? (
        <RxCross1
          className="text-white z-20 fixed right-5 top-8 cursor-pointer md:hidden"
          size={30}
          onClick={toggleMenu}
        />
      ) : (
        <GiHamburgerMenu
          className="text-white z-20 fixed right-5 top-8 cursor-pointer md:hidden"
          size={30}
          onClick={toggleMenu}
        />
      )}
      <img
        src="https://raw.githubusercontent.com/Sridhar-C-25/space-tourism-website_react_tailwind/b0a3b99570fe5679bb2e760cce508e15803aced1/src/assets/icon-close.svg"
        className="w-10 ml-7"
      ></img>

      <ul
        className={`bg-[#ffffff14] bg-grey-300 bg-opacity-75 backdrop-blur-lg md:pl-10 pr-28 z-10 md:static fixed top-0 md:h-auto h-screen duration-500 ease-linear ${
          !open ? "right-[-100%]" : "right-0"
        }`}
      >
        {Links.map((link, index) => (
          <li
            key={index}
            className="md:inline-block md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300"
          >
            <a
              href=""
              className="text-white cursor-pointer font-normal text-lg inline-block md:py-7 py-5"
            >
              <span className="font-bold mr-1.5 ">0{index + 1}</span>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
