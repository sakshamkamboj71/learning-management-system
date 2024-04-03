import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";
import Default from "./Default.js";
import Login from "./moderator/Login.js";
import ModAddCourse from "./moderator/ModAddCourse.js";
import ModAddLecture from "./moderator/ModAddLecture.js";
import ModEditCourse from "./moderator/ModEditCourse.js";
import ModHome from "./moderator/ModHome";
import ModProfile from "./moderator/ModProfile.js";
import ModRegister from "./moderator/ModRegister";
import ModViewCourse from "./moderator/ModViewCourse.js";
import ModViewLecture from "./moderator/ModViewLecture.js";
import Home from "./user/Home";
import UserRegister from "./user/UserRegister.js";

function App() {
  const token = window.localStorage.token;
  const loggedIn = window.localStorage.token !== undefined;

  const [isMod, setIsMod] = useState();

  const fetchValidity = async () => {
    const response = await axios.post(
      "http://localhost:8000/mod-auth/verify-mod",
      {
        token,
      }
    );
    console.log("Fetching User Validation");

    setIsMod(response.data.tokenStatus);
  };

  useEffect(() => {
    fetchValidity();
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          {loggedIn && isMod && (
            <>
              <Route path="/mod-home" element={<ModHome />} />
              <Route path="/mod-add-course" element={<ModAddCourse />} />
              <Route path="/mod-courses/:id" element={<ModViewCourse />} />
              <Route path="/mod-edit-course/:id" element={<ModEditCourse />} />
              <Route path="/mod-add-lecture/:id" element={<ModAddLecture />} />
              <Route
                path="/mod-view-lecture/:id/:id2"
                element={<ModViewLecture />}
              />
              <Route path="/" element={<Home />} />
              <Route path="/mod-profile" element={<ModProfile />} />
            </>
          )}

          {!loggedIn && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/mod-register" element={<ModRegister />} />
              <Route path="/sign-in" element={<Default />} />
              <Route path="/user-register" element={<UserRegister />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
