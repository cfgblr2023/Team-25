import React from "react";
import "../styles/landingPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleLoginSubmit = () => {
    navigate("/login");
  };

  return (
    <>
      <img
        src="./assets/nanasuu.png"
        alt="Canasu Main Logo"
        width="50%"
        height="50%"
      ></img>
      <div
        className="container-fluid d-flex ms-0 flex-column justify-content-center align-items-center overflow-auto"
        id="landingPageContainer1"
      >
        <p className="h3 text-light">
          <i>
            Our vision is to create a world in which all women determine the
            course of their lives & reach their full potential.
          </i>
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-4 d-flex justify-content-center ">
              <div className="col-6 ">
                <Link
                  to={"/login"}
                  type="button"
                  className="btn btn-warning btn-lg"
                >
                  Login
                </Link>
                <Link
                  to={"/signup"}
                  type="button"
                  className="ms-2 btn btn-warning btn-lg"
                >
                  SignUp
                </Link>
              </div>
            </div>
          </div>
        </p>
      </div>
      <div className="container-fluid d-flex justify-content-center align-items-center mt-3 mb-3">
        <img src="/assets/icon1.svg" alt="" height="250px" />
        <p className="h2 mt-4 text-secondary mb-4 ">
          <i>Nurturing Dreams, Empowering Communities</i>
        </p>
      </div>

      <div className="container-fluid pt-3 mb-5" id="landingPageContainer2">
        <p className="h1 text-black text-center">Our Interventions</p>
        <p className="h3 text-secondary text-center fst-italic mb-4">
          What we do?
        </p>

        <div className="row mb-2">
          <div className="col-3 d-flex flex-column">
            <img
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1673&q=80"
              alt=""
              className="container-fluid rounded h-50"
            />

            <h2>Project Shiksha</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              voluptatibus expedita, dicta natus repellendus temporibus.
            </p>
          </div>

          <div className="col-3 d-flex flex-column">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt=""
              className="container-fluid rounded h-50"
            />

            <h2>Project Vridhi</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              voluptatibus expedita, dicta natus repellendus temporibus.
            </p>
          </div>

          <div className="col-3 d-flex flex-column">
            <img
              src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
              alt=""
              className="container-fluid rounded h-50"
            />

            <h2>Project Udaan</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              voluptatibus expedita, dicta natus repellendus temporibus.
            </p>
            <p></p>
          </div>

          <div className="col-3 d-flex flex-column">
            <img
              src="https://images.unsplash.com/photo-1593526613712-7b4b9a707330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt=""
              className="container-fluid rounded h-50"
            />

            <h2>Project Empowher</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              voluptatibus expedita, dicta natus repellendus temporibus.
            </p>
            <p></p>
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex justify-content-center align-items-center mt-3 mb-3">
        <p className="h2 mt-2 text-secondary mb-3">
          <i>
            “Everything is within your power, and your power is within you.”
          </i>
        </p>
        <img src="/assets/imgIcon.svg" alt="" height="250px" />
      </div>

      {/* <footer class="text-muted py-2 bg-secondary">
        <div className="container-fluid">
          <p className="float-end mb-1">
            <a href="#" className="text-light">
              Back to top
            </a>
          </p>
          <p className="mb-1 text-light">©2023 by Canasu Dream Foundation</p>
        </div>
      </footer> */}
    </>
  );
}
