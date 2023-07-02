import React from "react";
import NavComp from "../components/NavComp";
import CSVUploader from "../components/CSVUploader";
export default function Admin() {
  return (
    <div>
      <NavComp />
      <CSVUploader />
    </div>
  );
}
