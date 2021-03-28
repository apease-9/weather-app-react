import React from "react";
import "./Switchs.css";

export default function UnitSwitch(props) {
  function toggleUnits() {
    if (props.units === "°C") {
      props.cF("°F");
      props.mSH("mph");
      props.apiUnits("imperial");
    } else {
      props.cF("°C");
      props.mSH("m/s");
      props.apiUnits("metric");
    }
  }
  return (
    <div id="current">
      <span id="metric">Metric</span>
      <label className="switch">
        <input type="checkbox" name="switchUnits" onChange={toggleUnits} />
        <span className="slider round"></span>
      </label>
      <span id="Imperial">Imperial</span>
    </div>
  );
}
