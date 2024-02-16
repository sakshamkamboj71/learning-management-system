import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Default from "./Default";
import Login from "./user/Login";
import Register from "./user/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Default />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
