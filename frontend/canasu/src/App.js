// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login';
import SignUp from './mentor/SignUp';
function App() {

  const [user,setLoginUser] = useState()

  const handleUpdate = (newValue) => {
    setLoginUser(newValue);
  };


  return (
    <div className="App">
      <Router>
        HOME
      
      <Routes>
            
            <Route path="/login" element={<Login  updateParentState={handleUpdate}/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            
            
            
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
