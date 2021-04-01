import React from "react";
import "./date.css";

export default function Date(props) {
  return (
    <div className="dateBox cbox col-4">
      <ul>
        <li id="tempNow">
          Currently
          <span className="tempNum unit-0">
            {Math.round(props.temperature)}
          </span>
          <span className="unit">{props.units}</span>
        </li>
        <li>
          Real Feel:
          <span className="realFeel unit-0">{Math.round(props.realFeel)}</span>
          <span className="unit">{props.units}</span>
        </li>
        <li>
          High:
          <span className="temp-max unit-0">{Math.round(props.high)}</span>
          <span className="unit">{props.units}</span>
        </li>

        <li>
          Low:
          <span className="temp-min unit-0">{Math.round(props.low)}</span>
          <span className="unit">{props.units}</span>
        </li>
      </ul>
    </div>
  );
}
