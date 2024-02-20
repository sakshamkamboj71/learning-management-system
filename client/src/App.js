import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";
import Default from "./Default.js";
import ModHome from "./moderator/ModHome";
import ModRegister from "./moderator/ModRegister";
import Home from "./user/Home";
import Login from "./user/Login";
import UserRegister from "./user/UserRegister.js";

function App() {
  const token = window.localStorage.token;
  const loggedIn = window.localStorage.token !== undefined;

  const [isMod, setIsMod] = useState();

  const fetchValidity = async () => {
    const response = await axios.post("http://localhost:8000/mod-auth/verify", {
      token,
    });

    setIsMod(response.data.tokenStatus);
  };

  useEffect(() => {
    fetchValidity();
  }, []);

  console.log(window.localStorage.token);

  return (
    <div className="App">
      <Router>
        <Routes>
          {isMod ? (
            <Route path="/" element={<ModHome />} />
          ) : (
            <Route path="/" element={<Home />} />
          )}

          {!loggedIn && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/mod-register" element={<ModRegister />} />
              <Route path="/sign-in" element={<Default />} />
              <Route path="/user-register" element={<UserRegister/>}/>
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
