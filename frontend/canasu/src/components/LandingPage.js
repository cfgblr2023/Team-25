import React from "react";
import "../styles/landingPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LandingPage() {
  return (
    <>
      <img
        src="https://static.wixstatic.com/media/1dd121_b983359cada04e6cb9b14506edf0da3b~mv2.png/v1/fill/w_440,h_236,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Main%20Logo.png"
        alt="Canasu Main Logo"
      ></img>
      <div
        className="container-fluid d-flex ms-0 flex-column justify-content-center align-items-center overflow-auto"
        id="landingPageContainerTop"
      >
        <p className="h3 text-dark">
          <i>Our vision is to create a world in which all women determine the course of their lives & reach their full potential.</i>
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-6 ">
            <button type="button" class="btn btn-warning btn-lg">Login</button>
            <button type="button" class="ms-2 btn btn-warning btn-lg">SignUp</button>
            </div>
          </div>
        </p>
      </div>
    </>
  );
}
