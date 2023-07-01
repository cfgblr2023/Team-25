import React from "react";
import "../styles/landingPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function LandingPage() {


  const navigate = useNavigate();

  const handleLoginSubmit = () => {
    navigate("/login")
  };


  return (
    <>
      <img
        src="https://static.wixstatic.com/media/1dd121_b983359cada04e6cb9b14506edf0da3b~mv2.png/v1/fill/w_440,h_236,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Main%20Logo.png"
        alt="Canasu Main Logo"
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
            <div className="col-6 ">
              <Link to={"/login"} type="button" className="btn btn-warning btn-lg">
                Login
              </Link>
              <Link to={"/signup"} type="button" className="ms-2 btn btn-warning btn-lg">
                SignUp
              </Link>
            </div>
          </div>
        </p>
      </div>
      <p className="h2 mt-4 text-secondary mb-4 ">
        <i>Nurturing Dreams, Empowering Communities</i>
      </p>
      <div className="container-fluid pt-3 mb-5" id="landingPageContainer2">
        <p className="h1 text-black text-center">Our Interventions</p>
        <p className="h3 text-secondary text-center fst-italic mb-4">
          What we do?
        </p>

        <div className="row mb-3">
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
            <p>
              <a className="btn btn-warning mb-5" href="#">
                View details »
              </a>
            </p>
           
          </div>

          <div className="col-3 d-flex flex-column">
           
           <img src="https://images.unsplash.com/photo-1593526613712-7b4b9a707330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" className="container-fluid rounded h-50" />
   
           <h2>Project Empowher</h2>
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatibus expedita, dicta natus repellendus temporibus.
           </p>
           <p>
             <a className="btn btn-warning mb-5" href="#">
               View details »
             </a>
           </p>
         </div>
        </div>
      </div>
      <div className="container-fluid" id="landingPageContainer3">
        <p className="h1 text-secondary text-center fst-italic py-4">
          How we do it?
        </p>
        <img
          src="https://static.wixstatic.com/media/1dd121_a991a648dede45e4943316465cf1c68e~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_90,enc_auto/Design%20for%20GIVE%20(2).jpg"
          alt="The Inner Voice Framework for change"
          className="img-fluid"
        ></img>
      </div>

      <footer class="text-muted py-2 bg-secondary">
        <div className="container-fluid">
          <p className="float-end mb-1">
            <a href="#" className="text-light">
              Back to top
            </a>
          </p>
          <p className="mb-1 text-light">©2023 by Canasu Dream Foundation</p>
        </div>
      </footer>
    </>
  );
}
