import React from "react";
import "./Switchs.css";

export default function Time(props) {
  function toggleTime() {
    if (props.time === "24") {
      props.changeTime("12");
    } else {
      props.changeTime("24");
    }
  }
  return (
    <div id="current-time">
      <span id="24-hour">24-hour</span>
      <label className="switch">
        <input type="checkbox" name="switchTime" onChange={toggleTime} />
        <span className="slider round"></span>
      </label>
      <span id="12-hour">12-hour</span>
      <h1>{props.time}</h1>
    </div>
  );
}
