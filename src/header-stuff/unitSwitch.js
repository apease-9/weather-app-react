import React from "react";
import "./Switchs.css";

export default function UnitSwitch(props) {
  function toggleUnits() {
    if (props.units === "°C") {
      props.changeUnits("°F");
      props.changeOther("mph");
      props.changeAunits("imperial");
      props.changeWindS(Math.round(props.wind * 2.237));
      props.changeCurrent(Math.round(props.current * (9 / 5) + 32));
      props.changeFeel(Math.round(props.realFeel * (9 / 5) + 32));
      props.changeHigh(Math.round(props.high * (9 / 5) + 32));
      props.changeLow(Math.round(props.low * (9 / 5) + 32));
    } else {
      props.changeUnits("°C");
      props.changeOther("m/s");
      props.changeAunits("metric");
      props.changeWindS(Math.round(props.wind / 2.237));
      props.changeCurrent(Math.round(props.current - 32) * (5 / 9));
      props.changeFeel(Math.round(props.realFeel - 32) * (5 / 9));
      props.changeHigh(Math.round(props.high - 32) * (5 / 9));
      props.changeLow(Math.round(props.low - 32) * (5 / 9));
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
