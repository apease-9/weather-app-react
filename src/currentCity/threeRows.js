import React from "react";
import Extra from "./extra.js";
import Imgs from "./imgs.js";
import Dates from "./date.js";
import "./threeRows.css";

export default function Rows(props) {
  return (
    <div className="container">
      <div className="currentWeather row">
        <Extra units={props.units} otherUnits={props.otherUnits} />
        <Imgs />
        <Dates units={props.units} />
      </div>
    </div>
  );
}
