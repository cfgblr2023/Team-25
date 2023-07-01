// import logo from './logo.svg';
import "./App.css";

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./mentor/SignUp";
import MentorDashboard from "./mentor/MentorDashboard";
function App() {
  const [user, setLoginUser] = useState();

  const handleUpdate = (newValue) => {
    setLoginUser(newValue);
  };

  return (
    <div className="App">
      <Router>
        HOME
        <Routes>
          <Route
            path="/login"
            element={<Login updateParentState={handleUpdate} />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mentor-dashboard" element={<MentorDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
