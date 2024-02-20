import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const fetchedUrl =
    "https://wallpapercrafter.com/sizes/2560x1440/156051-black-abstract-dark-texture.jpg";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:8000/mod-auth/login", {
      username,
      password,
    });

    if (response.data.error) {
      console.log(response.data.error);
      setError(response.data.error);
      return;
    }

    if (response.data.token) {
      console.log(response.data.token);
      window.localStorage.setItem("token", response.data.token);

      setTimeout(() => {
        console.log("Delayed for 1 second.");
      }, "1000");

      navigate("/");
    }
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-black"
      style={{ backgroundImage: `url(${fetchedUrl})` }}
    >
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <h1 className="text-7xl mb-4 text-white">LOGIN</h1>
        <form
          className="w-1/2 shadow-2xl p-8 text-lg bg-[#1A2421] border-[1px] rounded-md flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col mb-8 w-full">
            <label className="pl-2 text-white select-none" htmlFor="username">
              Username :
            </label>
            <input
              className="w-full outline-none p-2 focus:scale-[1.02] transition duration-150 rounded-md "
              type="text"
              id="username"
              placeholder="Enter your E-mail"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
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
      {error ? (
        <div className="flex justify-center items-center w-full absolute bottom-0 ">
          <div className="p-2 mb-4 text-lg font-bold bg-white rounded-md text-center">
            {error}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Login;
