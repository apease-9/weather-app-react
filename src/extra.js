import React from "react";

export default function Extra(props) {
  if (props.windDegree >= 348.75 || props.windDegree <= 11.25) {
    return (
      <div className="extraBox cbox col-4">
        <ul>
          <li className="extra">
            Humidity: <span id="humidity">{props.humidity}</span>%
          </li>
          <li className="extra">
            Wind:
            <span className="unit-1" id="wind">
              {Math.round(props.windSpeed)}
            </span>
            {props.mSH}
            <span className="windDe">N</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.windDegree >= 11.25 && props.windDegree <= 33.75) {
    return (
      <div className="extraBox cbox col-4">
        <ul>
          <li className="extra">
            Humidity: <span id="humidity">{props.humidity}</span>%
          </li>
          <li className="extra">
            Wind:
            <span className="unit-1" id="wind">
              {Math.round(props.windSpeed)}
            </span>
            {props.mSH}
            <span className="windDe">NNE</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.windDegree >= 33.75 && props.windDegree <= 56.25) {
    return (
      <div className="extraBox cbox col-4">
        <ul>
          <li className="extra">
            Humidity: <span id="humidity">{props.humidity}</span>%
          </li>
          <li className="extra">
            Wind:
            <span className="unit-1" id="wind">
              {Math.round(props.windSpeed)}
            </span>
            {props.mSH}
            <span className="windDe">NE</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.windDegree >= 56.25 && props.windDegree <= 78.75) {
    return (
      <div className="extraBox cbox col-4">
        <ul>
          <li className="extra">
            Humidity: <span id="humidity">{props.humidity}</span>%
          </li>
          <li className="extra">
            Wind:
            <span className="unit-1" id="wind">
              {Math.round(props.windSpeed)}
            </span>
            {props.mSH}
            <span className="windDe">ENE</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.windDegree >= 78.75 && props.windDegree <= 101.25) {
    return (
      <div className="extraBox cbox col-4">
        <ul>
          <li className="extra">
            Humidity: <span id="humidity">{props.humidity}</span>%
          </li>
          <li className="extra">
            Wind:
            <span className="unit-1" id="wind">
              {Math.round(props.windSpeed)}
            </span>
            {props.mSH}
            <span className="windDe">E</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.windDegree >= 101.25 && props.windDegree <= 123.75) {
    return (
      <div className="extraBox cbox col-4">
        <ul>
          <li className="extra">
            Humidity: <span id="humidity">{props.humidity}</span>%
          </li>
          <li className="extra">
            Wind:
            <span className="unit-1" id="wind">
              {Math.round(props.windSpeed)}
            </span>
            {props.mSH}
            <span className="windDe">ESE</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.windDegree >= 123.75 && props.windDegree <= 146.25) {
    return (
      <div className="extraBox cbox col-4">
        <ul>
          <li className="extra">
            Humidity: <span id="humidity">{props.humidity}</span>%
          </li>
          <li className="extra">
            Wind:
            <span className="unit-1" id="wind">
              {Math.round(props.windSpeed)}
            </span>
            {props.mSH}
            <span className="windDe">SE</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.windDegree >= 146.25 && props.windDegree <= 168.75) {
    return (
      <div className="extraBox cbox col-4">
        <ul>
          <li className="extra">
            Humidity: <span id="humidity">{props.humidity}</span>%
          </li>
          <li className="extra">
            Wind:
            <span className="unit-1" id="wind">
              {Math.round(props.windSpeed)}
            </span>
            {props.mSH}
            <span className="windDe">SSE</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.windDegree >= 168.75 && props.windDegree <= 191.25) {
    return (
      <div className="extraBox cbox col-4">
        <ul>
          <li className="extra">
            Humidity: <span id="humidity">{props.humidity}</span>%
          </li>
          <li className="extra">
            Wind:
            <span className="unit-1" id="wind">
              {Math.round(props.windSpeed)}
            </span>
            {props.mSH}
            <span className="windDe">S</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.windDegree >= 191.25 && props.windDegree <= 213.75) {
    return (
      <div className="extraBox cbox col-4">
        <ul>
          <li className="extra">
            Humidity: <span id="humidity">{props.humidity}</span>%
          </li>
          <li className="extra">
            Wind:
            <span className="unit-1" id="wind">
              {Math.round(props.windSpeed)}
            </span>
            {props.mSH}
            <span className="windDe">SSW</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.windDegree >= 213.75 && props.windDegree <= 236.25) {
    return (
      <div className="extraBox cbox col-4">
        <ul>
          <li className="extra">
            Humidity: <span id="humidity">{props.humidity}</span>%
          </li>
          <li className="extra">
            Wind:
            <span className="unit-1" id="wind">
              {Math.round(props.windSpeed)}
            </span>
            {props.mSH}
            <span className="windDe">SW</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.windDegree >= 236.25 && props.windDegree <= 258.75) {
    return (
      <div className="extraBox cbox col-4">
        <ul>
          <li className="extra">
            Humidity: <span id="humidity">{props.humidity}</span>%
          </li>
          <li className="extra">
            Wind:
            <span className="unit-1" id="wind">
              {Math.round(props.windSpeed)}
            </span>
            {props.mSH}
            <span className="windDe">WSW</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.windDegree >= 258.75 && props.windDegree <= 281.25) {
    return (
      <div className="extraBox cbox col-4">
        <ul>
          <li className="extra">
            Humidity: <span id="humidity">{props.humidity}</span>%
          </li>
          <li className="extra">
            Wind:
            <span className="unit-1" id="wind">
              {Math.round(props.windSpeed)}
            </span>
            {props.mSH}
            <span className="windDe">W</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.windDegree >= 281.25 && props.windDegree <= 303.75) {
    return (
      <div className="extraBox cbox col-4">
        <ul>
          <li className="extra">
            Humidity: <span id="humidity">{props.humidity}</span>%
          </li>
          <li className="extra">
            Wind:
            <span className="unit-1" id="wind">
              {Math.round(props.windSpeed)}
            </span>
            {props.mSH}
            <span className="windDe">WNW</span>
          </li>
        </ul>
      </div>
    );
  } else if (props.windDegree >= 303.75 && props.windDegree <= 326.25) {
    return (
      <div className="extraBox cbox col-4">
        <ul>
          <li className="extra">
            Humidity: <span id="humidity">{props.humidity}</span>%
          </li>
          <li className="extra">
            Wind:
            <span className="unit-1" id="wind">
              {Math.round(props.windSpeed)}
            </span>
            {props.mSH}
            <span className="windDe">NW</span>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="extraBox cbox col-4">
        <ul>
          <li className="extra">
            Humidity: <span id="humidity">{props.humidity}</span>%
          </li>
          <li className="extra">
            Wind:
            <span className="unit-1" id="wind">
              {Math.round(props.windSpeed)}
            </span>
            {props.mSH}
            <span className="windDe">NNW</span>
          </li>
        </ul>
      </div>
    );
  }
}
