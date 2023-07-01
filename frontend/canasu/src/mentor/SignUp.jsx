import React, { useState } from "react";
import "../styles/login.css";
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import Field from "./Field";

export default function SignUp({ updateParentState }) {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    // console.log(e.target)
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    }); 
  };

  const login = () => {
    axios.post("http://localhost:5000/login", user)
    .then(res => {
        alert(res.data.message)
        if(res.data.user)
        {
          updateParentState(res.data.user);
          navigate("/login")
          // console.log(res.data.user)
        }  
        
    })
}
  return (
    <div className="loginWrapper">
      <div className="login ">
        {/* {console.log(user)} */}
        <h1>Login</h1>
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Enter your Email"
          onChange={handleChange}
        ></input>




        <div className="button" onClick={login}>Login</div>
        <div>or</div>
        <div className="button" onClick={()=> navigate('/signup')} >Register</div>
      </div>
    </div>
  );
}



// email,
// full name,
// phone Number,
// gender,/Note: This program is only for Female candidates,
// dd/mm/yyyy,
// age,
// languages, spoken,
// current address,
// permanent address,
// Educational status 
// (If studying in School, please select others from the option below and mention the grade/class in which
// you are studying),

// Name and address of the School/College/Institution currently studying?
// ,
// Mention your program name and the year in which you are studying 
// ,

// Where do you see yourself in the next five years? 
// (Minimum 100 Words),

// Why are you interested in participating in this program? 
// ,
// What are some of the key areas you are seeking support or help from this program?
// ,

// Do you have 3 hours per week to commit for the Mentoring Program? *,
// What are your available days for this Mentoring Program? *


// What are your available time slots for this Program *
// ,
// Do you agree to attend all scheduled Mentoring sessions? *
// ,

// Is there anything else you would like us to know about your availability or circumstances? 

