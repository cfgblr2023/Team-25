import React from "react";
import NavComp from "./NavComp";
import "../styles/batch.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Batches() {
  return (
    <div>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1588912914017-923900a34710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1838&q=80"
                  alt=""
                  className="img-fluid"
                />

                <div class="card-body">
                  <p class="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Iste modi quasi tenetur? Ducimus voluptatum sint eligendi
                    explicabo tempore perspiciatis sed.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <p className="h5">English</p>
                    </div>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
