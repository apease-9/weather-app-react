import React from "react";
import Display from "./cityDisplay";
import Rows from "./threeRows.js";

export default function City(props) {
  return (
    <div className="city">
      <Display time={props.time} />
      <br />
      <br />
      <Rows units={props.units} otherUnits={props.otherUnits} />
    </div>
  );
}
