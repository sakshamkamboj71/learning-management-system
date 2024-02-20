
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const fetchedUrl =
    "https://wallpapercrafter.com/sizes/2560x1440/156051-black-abstract-dark-texture.jpg";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost:8000/mod-auth/register",
      {
        username,
        email,
        password,
        age,
        phone,
      }
    );

    if (response.data.error) {
      setError(response.data.error);
      console.log(response.data.error);
      return;
    }

    if (response.data.message) {
      console.log(response.data.message);
      navigate("/login");
    }
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-black"
      style={{ backgroundImage: `url(${fetchedUrl})` }}
    >
      <div className="w-full h-screen flex flex-col items-center pt-8">
        <h1 className="text-7xl mb-4 text-[#72abfc] select-none tracking-wide">
          MOD - REGISTER
        </h1>

        <form
          className="w-1/2 shadow-2xl p-8 text-lg bg-[#1A2421] border-[1px] rounded-md flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col mb-8 w-full">
            <label className="pl-2 text-white select-none" htmlFor="email">
              E-mail :
            </label>
            <input
              className="w-full outline-none p-2 focus:scale-[1.02] transition duration-150 rounded-md"
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
            <label className="pl-2 text-white select-none" htmlFor="username">
              Username :
            </label>
            <input
              className="w-full outline-none p-2 focus:scale-[1.02] transition duration-150 rounded-md"
              type="text"
              id="username"
              placeholder="Enter your Username"
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

          <div className="flex w-full justify-between mb-8">
            <div className="w-80">
              <label
                className="pl-2 text-white text-left select-none"
                htmlFor="age"
              >
                Age :
              </label>
              <input
                className="w-full p-2 rounded-md outline-none focus:scale-[1.02] transition duration-150"
                id="age"
                type="text"
                placeholder="Enter your Age"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </div>
            <div className="w-80">
              <label className="pl-2 text-white select-none" htmlFor="phone">
                Phone Number :
              </label>
              <input
                className="w-full p-2 rounded-md outline-none focus:scale-[1.02] transition duration-150"
                id="phone"
                type="text"
                placeholder="Enter your Phone No."
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
          </div>
          <button
            className="bg-[#1A2421] border-2 border-[#72abfc] hover:bg-[#72abfc] hover:text-black text-[#72abfc] font-semibold p-2 px-16 hover:scale-[1.15] ease-in-out duration-150 transition rounded-md"
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

export default UserRegister;
