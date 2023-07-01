import React, { useEffect, useState } from "react";
import "../styles/MentorDashboard.css";
import BaseComponent from "bootstrap/js/dist/base-component";
import BatchCard from "./BatchCard";
import NavComp from "../components/NavComp";
import { serviceGet } from "../utils/api";
import { toast } from "react-hot-toast";

const MenteeDashboard = () => {
  const [batches, setbatches] = useState([]);
  const token = localStorage.getItem("token");
  const getBatches = async()=>{
    try {
      const {batches} = await serviceGet('/mentee/batch',{
        'auth': `bearer ${token}`
      });
      setbatches(batches)
    } catch (error) {
      toast.error('something went wrong');
    }
  }
  useEffect(() => {
   getBatches(); 
  }, [])
  return (
    <>
      <NavComp />
      <div className="mentordashboard">
        <div className="mainContainer">
          <h1 className="mentorHeading"> Mentee/Student Page </h1>

          <div className="headingDiv">
            <h1 className="batchHeading"> Upcoming Sessions</h1>
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

export default MenteeDashboard;
