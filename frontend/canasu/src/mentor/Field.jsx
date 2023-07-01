import React from "react";

const Field = (props) => {
  return (
    <>
      <h1>(props.title)</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter your Email"
        onChange={handleChange}
      ></input>
    </>
  );
};

export default Field;
