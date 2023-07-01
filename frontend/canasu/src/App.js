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

function App() {
  useEffect(() => {
    const func = ()=>{
      if(localStorage.getItem('token')){

      }
    }
    func();
  }, [])
  

  return (
    <div className="App">
      <Router>
        {/* <LandingPage/> */}
      
      <Routes>
            
            <Route path="/" element={<LandingPage  />}/>
            <Route path="/login" element={<Tabs  />}/>
            <Route path="/admin" element={<AdminWrapper />}>
              <Route index element={<Navigate to="/admin/batches"/>}/>
                <Route path="batches" element={<h1>blah</h1>}/>
              </Route>
            {/* <Route path="/batches" element={<Batches />}/> */}
             

            
            
        </Routes>
      </Router>
    </div>
  );
}

export default App;
