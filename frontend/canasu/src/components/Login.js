import React, { useState } from "react";
import "../styles/login.css";
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import { servicePost } from "../utils/api";
import { toast } from "react-hot-toast";

export default function Login({type}) {

  const navigate = useNavigate();

  const [user, setUser] = useState({
   
    email: "",
    password: "",
  
  });

  const handleChange = (e) => {
    // console.log(e.target)
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    }); 
  };

  const login = async() => {
    console.log(user)
    try {
      const t = type===1 ? "admin" : type===2 ? "mentor" : "student"
      const {token, user: profile} = await servicePost(`/auth/${t}/signin`, {...user})
      localStorage.setItem('token', token);
      localStorage.setItem('type', t);
      navigate(`/${t}`);
    } catch (error) {
      toast.error("something went wrong")      
    }
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
       
      </div>
    </div>
  );
}
