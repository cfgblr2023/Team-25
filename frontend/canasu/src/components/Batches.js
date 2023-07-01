import React, { useEffect, useState } from "react";
import NavComp from "./NavComp";

import "bootstrap/dist/css/bootstrap.min.css";

import { useNavigate } from "react-router-dom";
import { serviceGet } from "../utils/api";
import { toast } from "react-hot-toast";

export default function Batches() {
  const mentor_mapping = [
    
    {
      id:0,
      mentor:"abc",
      mentee:"lmn",
      language:"hindi"
    },
    {
      id:1,
      mentor:"abc",
      mentee:"lmn",
      language:"hindi"
    },
    {
      id:2,
      mentor:"abc",
      mentee:"lmn",
      language:"hindi"
    },
    {
      id:3,
      mentor:"abc",
      mentee:"lmn",
      language:"hindi"
    },
    {
      id:4,
      mentor:"abc",
      mentee:"lmn",
      language:"hindi"
    }
    
    
  
]
const [batches, setbatches] = useState([]);
useEffect(() => {
  try {
    const func = async ()=>{
     const {batches, message} = await serviceGet('/admin/batch');
      toast.success(message);
      setbatches(batches);
    }
    
    func();
  } catch (error) {
    toast.error("something went wrong");
  }
}, [])

const navigate = useNavigate();

  const handleRowClick = () => {
    navigate("/batches/module")
  };

  
  return (
    <div>
      <div className="table-responsive small d-flex justify-content-center">
        <table className="table table-striped table-sm w-75 border border-dark mt-3">
          <thead>
            <tr>
              
              <th scope="col">Mentor</th>
              <th scope="col">Mentee</th>
              <th scope="col">Language</th>
            </tr>
          </thead>
          <tbody>
           {batches.map(
            (row)=>{
              return(
                <tr key={row.id} onClick={handleRowClick}>
                <td key={row.id}>{row?.mentor?.name}</td>
                <td key={row.id}>{row?.mentee?.name}</td>
                <td key={row.id}>{row?.mentor?.language}</td>
              </tr>
              )
              
            }
           )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
