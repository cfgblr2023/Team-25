import React, { useState } from "react";
import "../styles/login.css";
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login({ updateParentState }) {

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
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Enter your Password"
          onChange={handleChange}
        ></input>
        <div className="button" onClick={login}>Login</div>
        <div>or</div>
        <div className="button" onClick={()=> navigate('/signup')} >Register</div>
      </div>
    </div>
  );
}
