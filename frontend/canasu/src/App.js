// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Login from './components/Login';
import LandingPage from './components/LandingPage';
import Tabs from './components/Tabs';
import Admin from './admin/admin';
import Batches from './components/Batches';


function App() {


  const [user,setLoginUser] = useState()

  const handleUpdate = (newValue) => {
    setLoginUser(newValue);
  };


  return (
    <div className="App">
      <Router>
        {/* <LandingPage/> */}
      
      <Routes>
            
            <Route path="/" element={<LandingPage  />}/>
            <Route path="/tabs" element={<Tabs updateParentState={handleUpdate} />}/>
            <Route path="/admin" element={<Admin />}/>
            <Route path="/batches" element={<Batches />}/>
             

            {/* <Route path="/login" element={<Login  updateParentState={handleUpdate}/>}/> */}
            
            
            
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
