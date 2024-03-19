import axios from "axios";
import React, { useEffect, useState } from "react";
import ModNavBar from "./components/ModNavBar";

const ModProfile = () => {
  const token = window.localStorage.getItem("token");
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUserData = async () => {
      const response = await axios.post(
        "http://localhost:8000/mod-auth/fetch-user-details",
        {
          token,
        }
      );
      setUser(response.data.user);
      console.log(response.data.user);
    };
    fetchUserData();
  }, []);
  return (
    <div>
      <ModNavBar />
      <div className="bg-gradient-to-tr from-[#1c1c1c] via-[#1f1f1f] to-[#222222] w-full h-screen enableScroll">
        <h1 className="text-white mt-4 text-center text-5xl py-20 select-none">
          Profile
        </h1>
        <div className="w-full p-8 bg-red-400 flex justify-center">
          <div className="w-1/2 bg-blue-400">
            <p>Username : {user.username}</p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModProfile;
