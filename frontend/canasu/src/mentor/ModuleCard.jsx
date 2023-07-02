import React from "react";
import "../styles/modulePage.css";

const ModuleCard = () => {
  return (
    <>
      <div className="moduleCard">
        <div className="moduleFields">
          <div className="field">Language : </div>
          <div className="field">Description : </div>
          <div className="field">Start Date : </div>
          <div className="field">End Date : </div>
          <div className="field">Link: </div>
        </div>
        <button className="deleteModule">Delete</button>
      </div>
    </>
  );
};

export default ModuleCard;



