import React from "react";
import "./Switchs.css";

export default function Time() {
  return (
    <div id="current-time">
      <span id="24-hour">24-hour</span>
      <label className="switch">
        <input type="checkbox" name="switchTime" />
        <span className="slider round"></span>
      </label>
      <span id="12-hour">12-hour</span>
    </div>
  );
}
