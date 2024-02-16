import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
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
        <h1 className="text-6xl font-bold mb-4 text-black">Register</h1>

        <form
          className="w-1/2 shadow-2xl p-8 text-lg bg-[#1A2421] rounded-md flex flex-col items-center"
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

export default Register;
