import React from "react";

const BatchCards = (props) => {
  return (
    <>
      <button className="batchCards" onClick={props.onclick}>
        <div className="mentorBatch">{props.mentor}</div>
        <div className="menteeBatch">{props.mentee}</div>
        <div className="languageBatch">{props.language}</div>
      </button>
    </>
  );
};

export default BatchCards;
