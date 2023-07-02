import React from "react";
import "../styles/modulePage.css";

const ViewAdminCard = ({name}) => {
  return (
    <>
      <div className="adminCard">
        <div className="adminName">{name} </div>
        <button className="deleteAdmin"> Delete</button>
      </div>
    </>
  );
};

export default ViewAdminCard;
