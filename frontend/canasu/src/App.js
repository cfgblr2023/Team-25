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
<<<<<<< HEAD

function App() {
  useEffect(() => {
    const func = ()=>{
      if(localStorage.getItem('token')){

      }
    }
    func();
  }, [])
=======
import { serviceGet } from "./utils/api";
import ProtectedRoute from "./wrapper/ProtectedRoute";

function App() {
 
>>>>>>> 2c1f4264636db091d97ea469b96a4248e60f18c5
  

  return (
    <div className="App">
      <Router>
      
      <Routes>
            
            <Route path="/" element={<LandingPage  />}/>
            <Route path="/login" element={<Tabs  />}/>
<<<<<<< HEAD
            <Route path="/admin" element={<AdminWrapper />}>

              <Route  element={<Navigate to="/batches"/>}/>
=======
            <Route path="/admin" element={<ProtectedRoute><AdminWrapper /></ProtectedRoute>}>
              <Route index element={<Navigate to="/admin/batches"/>}/>
>>>>>>> 2c1f4264636db091d97ea469b96a4248e60f18c5
                <Route path="batches" element={<h1>blah</h1>}/>
              </Route>
            {/* <Route path="/batches" element={<Batches />}/> */}
             

            
            
        </Routes>
      </Router>
    </div>
  );
}

export default App;
