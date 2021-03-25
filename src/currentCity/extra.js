import React from "react";
import "./extra.css";

export default function Extra(props) {
  if (props.degrees >= 348.75 || props.degrees <= 11.25) {
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
              {Math.round(props.wind)}
            </span>
            {props.otherUnits}
            <span className="windDe">N</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.degrees >= 11.25 && props.degrees <= 33.75) {
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
              {Math.round(props.wind)}
            </span>
            {props.otherUnits}
            <span className="windDe">NNE</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.degrees >= 33.75 && props.degrees <= 56.25) {
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
              {Math.round(props.wind)}
            </span>
            {props.otherUnits}
            <span className="windDe">NE</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.degrees >= 56.25 && props.degrees <= 78.75) {
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
              {Math.round(props.wind)}
            </span>
            {props.otherUnits}
            <span className="windDe">ENE</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.degrees >= 78.75 && props.degrees <= 101.25) {
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
              {Math.round(props.wind)}
            </span>
            {props.otherUnits}
            <span className="windDe">E</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.degrees >= 101.25 && props.degrees <= 123.75) {
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
              {Math.round(props.wind)}
            </span>
            {props.otherUnits}
            <span className="windDe">ESE</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.degrees >= 123.75 && props.degrees <= 146.25) {
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
              {Math.round(props.wind)}
            </span>
            {props.otherUnits}
            <span className="windDe">SE</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.degrees >= 146.25 && props.degrees <= 168.75) {
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
              {Math.round(props.wind)}
            </span>
            {props.otherUnits}
            <span className="windDe">SSE</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.degrees >= 168.75 && props.degrees <= 191.25) {
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
              {Math.round(props.wind)}
            </span>
            {props.otherUnits}
            <span className="windDe">S</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.degrees >= 191.25 && props.degrees <= 213.75) {
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
              {Math.round(props.wind)}
            </span>
            {props.otherUnits}
            <span className="windDe">SSW</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.degrees >= 213.75 && props.degrees <= 236.25) {
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
              {Math.round(props.wind)}
            </span>
            {props.otherUnits}
            <span className="windDe">SW</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.degrees >= 236.25 && props.degrees <= 258.75) {
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
              {Math.round(props.wind)}
            </span>
            {props.otherUnits}
            <span className="windDe">WSW</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.degrees >= 258.75 && props.degrees <= 281.25) {
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
              {Math.round(props.wind)}
            </span>
            {props.otherUnits}
            <span className="windDe">W</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.degrees >= 281.25 && props.degrees <= 303.75) {
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
              {Math.round(props.wind)}
            </span>
            {props.otherUnits}
            <span className="windDe">WNW</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.degrees >= 303.75 && props.degrees <= 326.25) {
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
              {Math.round(props.wind)}
            </span>
            {props.otherUnits}
            <span className="windDe">NW</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.degrees >= 326.25 && props.degrees <= 348.75) {
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
              {Math.round(props.wind)}
            </span>
            {props.otherUnits}
            <span className="windDe">NNW</span>
          </li>
        </ul>
      </div>
    );
  }
}
