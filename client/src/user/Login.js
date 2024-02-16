import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const fetchedUrl =
    "https://img.freepik.com/free-vector/white-abstract-wallpaper_23-2148830027.jpg?w=1060&t=st=1707983932~exp=1707984532~hmac=e853d17148b40b88c10d45c2d21b1f30da0dc988d67097c2222049446be1b81c";

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="w-full h-screen bg-cover"
      style={{ backgroundImage: `url(${fetchedUrl})` }}
    >
      <div className="w-full h-screen flex flex-col items-center justify-center backdrop-blur-md">
        <h1 className="text-6xl font-bold mb-4 text-black">Login</h1>
        <form
          className="w-1/2 shadow-2xl p-8 text-lg bg-[#1A2421] rounded-md flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col mb-8 w-full">
            <label className="pl-2 text-white select-none" htmlFor="email">
              E-mail :
            </label>
            <input
              className="w-full outline-none p-2 focus:scale-[1.02] transition duration-150 rounded-md "
              type="email"
              id="email"
              placeholder="Enter your E-mail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col mb-8 w-full">
            <label className="pl-2 text-white select-none" htmlFor="password">
              Password :
            </label>
            <input
              className="w-full outline-none p-2 focus:scale-[1.02] transition duration-150 rounded-md"
              type="password"
              id="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            className="bg-[#1A2421] border-2 hover:border-black hover:bg-white hover:text-black text-white font-semibold p-2 px-16 hover:scale-[1.15] ease-in-out duration-150 transition rounded-md"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
