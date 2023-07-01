// import logo from './logo.svg';
import "./App.css";

import React, { useEffect, useState } from 'react'
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import AdminWrapper from './wrapper/AdminWrapper';
import LandingPage from "./components/LandingPage";
import Tabs from "./components/Tabs";
import Admin from "./admin/admin";
import { serviceGet } from "./utils/api";
import ProtectedRoute from "./wrapper/ProtectedRoute";
import { Toaster } from "react-hot-toast";

function App() {
 
  

  return (
    <div className="App">
      <Toaster/>
      <Router>
      
      <Routes>
            
            <Route path="/" element={<LandingPage  />}/>
            <Route path="/login" element={<Tabs  />}/>
            {/* <Route path="/admin" element={<ProtectedRoute type={`admin`}><AdminWrapper /></ProtectedRoute>}> */}
            <Route path="/admin" element={<AdminWrapper />}>
              <Route index element={<h1>blah</h1>}/>
                <Route path="batches" element={<h1>blah</h1>}/>
              </Route>
            {/* <Route path="/batches" element={<Batches />}/> */}
             

            
            
        </Routes>
      </Router>
    </div>
  );
}

export default App;
