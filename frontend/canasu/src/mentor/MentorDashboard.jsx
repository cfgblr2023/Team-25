import React, { useEffect, useState } from "react";
import "../styles/MentorDashboard.css";
import BaseComponent from "bootstrap/js/dist/base-component";
import BatchCard from "./BatchCard";
import { toast } from "react-hot-toast";
import { serviceGet } from "../utils/api";

const MentorDashboard = () => {
  const [batches, setbatches] = useState([]);
  const token = localStorage.getItem("token");
  const getBatches = async()=>{
    try {
      const {batch} = await serviceGet('/mentor/batch',{
        'auth': `bearer ${token}`
      });
      setbatches(batch)
    } catch (error) {
      toast.error('something went wrong');
    }
  }
  useEffect(() => {
   getBatches(); 
  }, [])
  
  return (
    <>
      <div className="mentordashboard">
        {/* <div className="sidebar">
          <div className="logoMentor">
            <h1 className="logoMentorh1">Mentor</h1>
          </div>
          <div className="sections_mentor">
            <ul className="mentor_sidebar_names">
              <li className="mentor_sidebar_ind_names">Upcoming Sessions</li>
              <li className="mentor_sidebar_ind_names">Upcoming Sessions</li>
              <li className="mentor_sidebar_ind_names">Upcoming Sessions</li>
              <li className="mentor_sidebar_ind_names">Upcoming Sessions</li>

              <div className="logout_mentor">Log out</div>
            </ul>
          </div>
        </div> */}
        <div className="mainContainer">
          <h1 className="mentorHeading"> Mentor Page </h1>

          <div className="headingDiv">
            <h1 className="batchHeading"> Scheduled Batches</h1>
          </div>
          <div className="batchBody">
            {
              batches.map((batch,i)=>{
                return <BatchCard batch={batch} idx={i+1}/>
              })  
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorDashboard;
