import { useState } from "react";
import Login from "./Login";
import "../styles/Tabs.css";

function Tabs(props) {
  const [toggleState, setToggleState] = useState(3);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="tabsContainer">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Admin
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Mentor
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Mentee
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          {/* <h2>Admin</h2> */}
          {/* <hr /> */}
          <Login updateParentState={props.updateParentState} type={1}/>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          {/* <h2>Mentor</h2> */}
          {/* <hr /> */}
          <Login updateParentState={props.updateParentState} type={2}/>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          {/* <h2>Mentee</h2> */}
          {/* <hr /> */}
          <Login updateParentState={props.updateParentState} type={3}/>
        </div>
      </div>
    </div>
  );
}

export default Tabs;