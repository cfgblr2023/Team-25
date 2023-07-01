import React, { useState } from "react";
import "../styles/signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Field from "./Field";

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
    axios.post("http://localhost:5000/login", user).then((res) => {
      alert(res.data.message);
      if (res.data.user) {
        updateParentState(res.data.user);
        navigate("/login");
        // console.log(res.data.user)
      }
    });
  };
  return (
    <div className="signupWrapper">
      <div className="signupContainer ">
        <h1 className="head">Sign Up</h1>

        <Field
          title="Email"
          placeholder="Enter your email"
          name="email"
          note=""
        />
        <Field
          title="Full Name"
          placeholder="Enter your Full Name"
          name="email"
          note=""
        />
        <Field
          title="Phone Number
"
          placeholder="Enter your Phone Number *
"
          name="number"
          note=""
        />

        <div className="field">
          <p className="heading">Gender</p>
          <p className="note">
            Note: This program is only for Female candidates{" "}
          </p>
          <label>
            <input type="radio" name="radioOptions" value="Male" />
            Male
          </label>
          <label>
            <input type="radio" name="radioOptions" value="Female" />
            Female
          </label>
        </div>

        <Field
          title="Please enter your date of birth in the format DD/MM/YYYY. *"
          type="date"
          name="email"
          note=""
        />

        <div className="field">
          <p className="heading">Which age category do you belong to? </p>
          <label>
            <input type="checkbox" name="checkboxOptions" value="option1" />
            14-17
          </label>
          <label>
            <input type="checkbox" name="checkboxOptions" value="option2" />
            18-24
          </label>
          <label>
            <input type="checkbox" name="checkboxOptions" value="option3" />
            25-34
          </label>
          <label>
            <input type="checkbox" name="checkboxOptions" value="option3" />
            35-44
          </label>
        </div>

        <div className="field">
          <p className="heading">Languages Spoken</p>
          <p className="note">(Select Multiple if applicable)</p>
          <label>
            <input type="checkbox" name="checkboxOptions" value="option1" />
            English{" "}
          </label>
          <label>
            <input type="checkbox" name="checkboxOptions" value="option2" />
            Hindi{" "}
          </label>
          <label>
            <input type="checkbox" name="checkboxOptions" value="option3" />
            Kannada
          </label>
          <label>
            <input type="checkbox" name="checkboxOptions" value="option3" />
            Tamil
          </label>
          <label>
            <input type="checkbox" name="checkboxOptions" value="option3" />
            Malayalam
          </label>
          <label>
            <input type="checkbox" name="checkboxOptions" value="option3" />
            Telgu
          </label>
          <label>
            <input type="checkbox" name="checkboxOptions" value="option3" />
            Marathi
          </label>
          <label>
            <input type="checkbox" name="checkboxOptions" value="option3" />
            Other
          </label>
        </div>

        <Field
          title="Current Address
"
          type="text"
          name="email"
          note=""
        />
        <Field title="Permanent Address" name="email" note="" />

        <div className="field">
          <p className="heading">Educational status</p>
          <p className="note">
            (If studying in School, please select others from the option below
            and mention the grade/class in which you are studying){" "}
          </p>
          <label>
            <input type="radio" name="radioOptions" value="Male" />
            Completed graduation
          </label>
          <label>
            <input type="radio" name="radioOptions" value="Female" />
            Pursuing graduation
          </label>
          <label>
            <input type="radio" name="radioOptions" value="Female" />
            Completed Diploma
          </label>
          <label>
            <input type="radio" name="radioOptions" value="Female" />
            Pursuing Diploma
          </label>
          <label>
            <input type="radio" name="radioOptions" value="Female" />
            Completed Grade 12th (PUC)
          </label>
          <label>
            <input type="radio" name="radioOptions" value="Female" />
            Pursuing Grade 12th (PUC)
          </label>
          <label>
            <input type="radio" name="radioOptions" value="Female" />
            Completed grade 10th (SSLC)
          </label>
          <label>
            <input type="radio" name="radioOptions" value="Female" />
            Pursuing grade 10th (SSLC)
          </label>
          <label>
            <input type="radio" name="radioOptions" value="Female" />
            Other
          </label>
        </div>

        <Field
          title="Name and address of the School/College/Institution currently studying?

"
          type="text"
          name="email"
          note="(Example: Name - MES College of Arts, Commerce and Science, Address -  15th cross, prof, MPL Sastry
    Road, Malleshwaram, Bengaluru, Karnataka 560003)
    "
        />

        <Field
          title="Mention your program name and the year in which you are studying 
"
          name="email"
          note="(Example 1: BCOM - 3rd Year, Example 2: 10th Grade - Mid term)
"
        />
        <Field
          title="Where do you see yourself in the next five years? 
"
          name="email"
          note="(Minimum 100 Words)
"
        />
        <Field
          title="Why are you interested in participating in this program? 
"
          name="email"
          note="(Please briefly describe your career goals and how you hope this program will help you achieve them -
    Minimum 100 Words)
    "
        />

        <div className="field">
          <p className="heading">
            What are some of the key areas you are seeking support or help from
            this program?
          </p>
          <p className="note">(Select Multiple if applicable)</p>
          <label>
            <input type="checkbox" name="radioOptions" value="Male" />
            Discovering your strengths and passions
          </label>
          <label>
            <input type="checkbox" name="radioOptions" value="Male" />
            Identifying your values and goal
          </label>
          <label>
            <input type="checkbox" name="radioOptions" value="Male" />
            Crafting a personal mission statement
          </label>
          <label>
            <input type="checkbox" name="radioOptions" value="Male" />
            Exploring careers with impact
          </label>
          <label>
            <input type="checkbox" name="radioOptions" value="Male" />
            Developing skills for impact
          </label>
          <label>
            <input type="checkbox" name="radioOptions" value="Male" />
            Networking and building relationships
          </label>
          <label>
            <input type="checkbox" name="radioOptions" value="Male" />
            Overcoming obstacles and setbacks
          </label>
          <label>
            <input type="checkbox" name="radioOptions" value="Male" />
            Finding work-life balance
          </label>
          <label>
            <input type="checkbox" name="radioOptions" value="Male" />
            Making a difference in your daily life
          </label>
          <label>
            <input type="checkbox" name="radioOptions" value="Male" />
            Creating a plan for career growth and impact
          </label>
          <label>
            <input type="checkbox" name="radioOptions" value="Male" />
            Crafting Your Personal Brand
          </label>
        </div>

        <div className="field">
          <p className="heading">
            Do you have 3 hours per week to commit for the Mentoring Program?{" "}
          </p>
          <label>
            <input type="radio" name="radioOptions" value="Male" />
            Yes
          </label>
          <label>
            <input type="radio" name="radioOptions" value="Female" />
            No
          </label>
        </div>

        <div className="field">
          <p className="heading">
            What are your available days for this Mentoring Program? *
          </p>
          <label>
            <input type="checkbox" name="days" value="" />
            Monday
          </label>
          <label>
            <input type="checkbox" name="days" value="" />
            Tuesday
          </label>
          <label>
            <input type="checkbox" name="days" value="" />
            Wednesday
          </label>
          <label>
            <input type="checkbox" name="days" value="" />
            Thursday
          </label>
          <label>
            <input type="checkbox" name="days" value="" />
            Friday
          </label>
          <label>
            <input type="checkbox" name="days" value="" />
            Friday
          </label>
          <label>
            <input type="checkbox" name="days" value="" />
            Sunday
          </label>
          <label>
            <input type="checkbox" name="days" value="" />
            Monday
          </label>
        </div>

        <div className="field">
          <p className="heading">
            What are your available time slots for this Program *
          </p>
          <label>
            <input type="checkbox" name="radioOptions" value="Male" />
            09:00am - 12:00pm
          </label>
          <label>
            <input type="checkbox" name="radioOptions" value="Female" />
            12:00pm - 03:00pm
          </label>
          <label>
            <input type="checkbox" name="radioOptions" value="Female" />
            03:00pm - 06:00pm
          </label>
          <label>
            <input type="checkbox" name="radioOptions" value="Female" />
            06:00pm - 09:00pm
          </label>
        </div>

        <div className="field">
          <p className="heading">
            Do you agree to attend all scheduled Mentoring sessions?
          </p>
          <label>
            <input type="radio" name="radioOptions" value="Male" />
            Yes
          </label>
          <label>
            <input type="radio" name="radioOptions" value="Female" />
            No
          </label>
        </div>

        <label className="heading" for="myTextarea">
          Is there anything else you would like us to know about your
          availability or circumstances?{" "}
        </label>

        <textarea className="input textarea" />
        <div className="btn">Register</div>
      </div>
    </div>
  );
}
