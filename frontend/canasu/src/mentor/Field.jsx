import React, { useState } from "react";
import "../styles/signup.css";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Field = (props) => {
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
    axios.post("http://localhost:5000/login", user).then((res) => {
      alert(res.data.message);
      if (res.data.user) {
        // updateParentState(res.data.user);
        navigate("/login");
        // console.log(res.data.user)
      }
    });
  };
  return (
    <>
       <div className="field">
          <p className="heading">
            {props.title}
          </p>
          <p className="note">{props.note}</p>
          <input
            className="input"
            type={props.type ||"text"} 
            name={props.name}
            value={user.email}
            placeholder={props.placeholder}
            onChange={handleChange}
          ></input>
        </div>
    </>
  );
};

export default Field;



