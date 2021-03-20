import React from "react";
import "./Switchs.css";

export default function UnitSwitch() {
  return (
    <div id="current">
      <span id="metric">Metric</span>
      <label className="switch">
        <input type="checkbox" name="switchUnits" />
        <span className="slider round"></span>
      </label>
      <span id="Imperial">Imperial</span>
    </div>
  );
}
