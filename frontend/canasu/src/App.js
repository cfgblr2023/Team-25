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
import { Toaster } from "react-hot-toast";
import MentorDashboard from "./mentor/MentorDashboard";
import Batches from "./components/Batches";
import MenteeDashboard from "./mentee/MenteeDashboard";
import SignUp from "./mentor/SignUp"
import ModulePage from "./mentor/ModulePage"
import Modules_new from "./components/Modules_new";
import FooterComp from "./components/FooterComp";
import Add from "./admin/Add";


function App() {
  return (
    <div className="App">
      <Toaster/>
      <Router>
      
      <Routes>
            
            <Route path="/" element={<LandingPage  />}/>
            <Route path="/login" element={<Tabs  />}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path="/admin" element={<AdminWrapper />}>
            {/* <Route path="/admin" element={<ProtectedRoute><AdminWrapper /></ProtectedRoute>}> */}
              <Route index element={<Navigate to="/admin/batches"/>}/>
                <Route path="batches" element={<Batches/>}/>
                <Route path="batch/:id" element={<Modules_new/>}/>
                <Route path="add" element={<Add/>}/>
            </Route>
            
            {/* <Route path="/mentor" element={<ProtectedRoute><MentorWrapper /></ProtectedRoute>}> */}
            <Route path="/mentor" element={<MentorWrapper />}>
              <Route index element={<Navigate to="/mentor/dashboard"/>}/>
                <Route path="dashboard" element={<MentorDashboard/>}/>
                <Route  element={<Navigate to="/mentor/batch/id"/>}/>
                <Route path="batch/id" element={<Modules_new/>}/>
            </Route>

            {/* <Route path="/student" element={<ProtectedRoute><MenteeWrapper /></ProtectedRoute>}> */}
            <Route path="/student" element={<MenteeWrapper />}>
              <Route index element={<Navigate to="/student/dashboard"/>}/>
                <Route path="dashboard" element={<MenteeDashboard/>}/>
                <Route  element={<Navigate to="/student/batch/id"/>}/>
                <Route path="batch/id" element={<Modules_new/>}/>
                
            </Route>

            {/* <Route path="/batches" element={<Batches />}/> */}
             

        </Routes>
      </Router>
      <FooterComp/>
    </div>
  );
}

export default App;
