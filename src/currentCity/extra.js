import React from "react";
import "./extra.css";

export default function Extra(props) {
  return (
    <div className="extraBox cbox col-4">
      <ul>
        <li className="extra">
          Dew Point:
          <span id="dew" className="unit-0">
            20
          </span>
          {props.units}
        </li>
        <li className="extra">
          Humidity: <span id="humidity">20</span>%
        </li>
        <li className="extra">
          Wind:
          <span className="unit-1" id="wind">
            20
          </span>
          {props.otherUnits}
          <span className="windDe">SW</span>
        </li>
      </ul>
    </div>
  );
}
