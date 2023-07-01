import React from "react";
import NavComp from "./NavComp";
import "../styles/batches.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useNavigate } from "react-router-dom";

export default function Batches() {
  const mentor_mapping = [
    {
      id: 0,
      mentor: "abc",
      mentee: "lmn",
      language: "hindi",
    },
    {
      id: 1,
      mentor: "abc",
      mentee: "lmn",
      language: "hindi",
    },
    {
      id: 2,
      mentor: "abc",
      mentee: "lmn",
      language: "hindi",
    },
    {
      id: 3,
      mentor: "abc",
      mentee: "lmn",
      language: "hindi",
    },
    {
      id: 4,
      mentor: "abc",
      mentee: "lmn",
      language: "hindi",
    },
  ];
  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate("/admin/id");
  };

  return (
    <>
      <div className="Slider ">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1495837174058-628aafc7d610?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW4lMjBlbXBvd2VybWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                class="d-block w-100"
                alt="..."
                height={500}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1621973856220-29115d9b5d29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBlbXBvd2VybWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="d-block w-100"
                alt="..."
                height={500}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1547937084-4d587301a545?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjBlbXBvd2VybWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="d-block w-100"
                alt="..."
                height={500}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span cclassName="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="Batches">
        <div className="table-responsive small d-flex justify-content-center ">
          <table className="table  table-sm w-75 border border-dark mt-5 table-hover">
            <thead>
              <tr>
                <th scope="col">Mentor</th>
                <th scope="col">Mentee</th>
                <th scope="col">Language</th>
              </tr>
            </thead>
            <tbody>
              {mentor_mapping.map((row) => {
                return (
                  <tr
                    className="Batches-tableRow"
                    key={row.id}
                    onClick={handleRowClick}
                  >
                    <td key={row.id}>{row.mentor}</td>
                    <td key={row.id}>{row.mentee}</td>
                    <td key={row.id}>{row.language}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
