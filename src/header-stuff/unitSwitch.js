import React from "react";
import "./Switchs.css";

export default function UnitSwitch(props) {
  function toggleUnits() {
    if (props.units === "°C") {
      props.changeUnits("°F");
      props.changeOther("mph");
      props.changeAunits("imperial");
    } else {
      props.changeUnits("°C");
      props.changeOther("m/s");
      props.changeAunits("metric");
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
