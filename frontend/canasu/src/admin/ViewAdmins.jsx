import React, { useEffect } from "react";
import ViewAdminCard from "./ViewAdminCard";
import "../styles/ViewAdmin.css";
import { data } from "./data";

const ViewAdmins = () => {

  useEffect(() => {
     const adminData = fetch("api");
    }, []);

  return (
    <div className="adminContainer">
      <h1>Admins</h1>
      {
        data.map(admin => (
          <ViewAdminCard key={admin.id} name={admin.name} />
        ))
      }
      <button className="addAdmin">Add Course</button>
    </div>
  );
};

export default ViewAdmins;
