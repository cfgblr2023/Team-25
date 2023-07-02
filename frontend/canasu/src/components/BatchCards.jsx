import React from "react";
import { Link } from "react-router-dom";

const BatchCards = (props) => {
  return (
    <>
      <Link to={`/admin/batch/${props.id}`} className="batchCards" >
        <div className="mentorBatch">{props.mentor}</div>
        <div className="menteeBatch">{props.mentee}</div>
        <div className="languageBatch">{props.language}</div>
      </Link>
    </>
  );
};

export default BatchCards;
