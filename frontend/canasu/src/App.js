// import logo from './logo.svg';
import "./App.css";

import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminWrapper from './wrapper/AdminWrapper';
import MenteeWrapper from "./wrapper/MenteeWrapper";
import MentorWrapper from "./wrapper/MentorWrapper";
import LandingPage from "./components/LandingPage";
import Tabs from "./components/Tabs";
import Admin from "./admin/admin";
import { serviceGet } from "./utils/api";
import ProtectedRoute from "./wrapper/ProtectedRoute";
import MentorDashboard from "./mentor/MentorDashboard";
import MenteeDashboard from "./mentee/MenteeDashboard";
import SignUp from "./mentor/SignUp"
import Batches from "./components/Batches";



function App() {
  return (
    <div className="App">
      <Router>
      
      <Routes>
            
            <Route path="/" element={<LandingPage  />}/>
            <Route path="/login" element={<Tabs  />}/>
            {/* <Route path="/admin" element={<ProtectedRoute><AdminWrapper /></ProtectedRoute>}> */}
            <Route path="/admin" element={<AdminWrapper />}>
              <Route index element={<Navigate to="/admin/batches"/>}/>
                <Route path="batches" element={<Batches/>}/>
            </Route>
            
            {/* <Route path="/mentor" element={<ProtectedRoute><MentorWrapper /></ProtectedRoute>}> */}
            <Route path="/mentor" element={<MentorWrapper />}>
              <Route index element={<Navigate to="/mentor/dashboard"/>}/>
                <Route path="dashboard" element={<MentorDashboard/>}/>
            </Route>

            {/* <Route path="/student" element={<ProtectedRoute><MenteeWrapper /></ProtectedRoute>}> */}
            <Route path="/student" element={<MenteeWrapper />}>
              <Route index element={<Navigate to="/student/dashboard"/>}/>
                <Route path="dashboard" element={<MenteeDashboard/>}/>
            </Route>

            {/* <Route path="/batches" element={<Batches />}/> */}
             

        </Routes>
      </Router>
    </div>
  );
}

export default App;
