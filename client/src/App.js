import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Default from "./Default";
import ModRegister from "./moderator/ModRegister";
import Login from "./user/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Default />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mod-register" element={<ModRegister />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
