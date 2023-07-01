import React from "react";
import "../styles/modulePage.css";
import NavComp from "../components/NavComp";
import ModuleCard from "./ModuleCard";

const ModulePage = () => {
  return (
    <>
      <NavComp />
      <div className="moduleContainer">
        <h1>Modules</h1>
        <ModuleCard />
        <ModuleCard />
        <ModuleCard />
        <ModuleCard />
        <button className="addModule">Add Course</button>
      </div>
    </>
  );
};

export default ModulePage;
