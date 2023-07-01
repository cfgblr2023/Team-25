import React from "react";
import "../styles/MentorDashboard.css";
import BaseComponent from "bootstrap/js/dist/base-component";
import BatchCard from "./BatchCard";
import NavComp from "../components/NavComp";

const MenteeDashboard = () => {
  return (
    <>
      
      <div className="mentordashboard">
        <div className="mainContainer">
          <h1 className="mentorHeading"> Mentee/Student Page </h1>

          <div className="headingDiv">
            <h1 className="batchHeading"> Upcoming Sessions</h1>
          </div>
          <div className="batchBody">
            <BatchCard />
            <BatchCard />
            <BatchCard />
            <BatchCard />
            <BatchCard />
            <BatchCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenteeDashboard;
