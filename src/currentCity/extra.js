import React from "react";
import "./extra.css";

export default function Extra(props) {
  return (
    <div className="extraBox cbox col-4">
      <ul>
        <li className="extra">
          Dew Point:
          <span id="dew" className="unit-0">
            {props.dew}
          </span>
          {props.units}
        </li>
        <li className="extra">
          Humidity: <span id="humidity">{props.humidity}</span>%
        </li>
        <li className="extra">
          Wind:
          <span className="unit-1" id="wind">
            {props.wind}
          </span>
          {props.otherUnits}
          <span className="windDe">SW</span>
        </li>
      </ul>
    </div>
  );
}
