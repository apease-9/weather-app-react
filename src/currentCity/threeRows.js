import React from "react";
import Extra from "./extra.js";
import Imgs from "./imgs.js";
import Dates from "./date.js";
import "./threeRows.css";

export default function Rows(props) {
  return (
    <div className="container">
      <div className="currentWeather row">
        <Extra
          cF={props.cF}
          mSH={props.mSH}
          humidity={props.humidity}
          windSpeed={props.windSpeed}
          windDegree={props.windDegree}
        />
        <Imgs icon={props.icon} description={props.description} />
        <Dates
          cF={props.cF}
          temperature={props.temperature}
          realFeel={props.realFeel}
          high={props.high}
          low={props.low}
        />
      </div>
    </div>
  );
}
