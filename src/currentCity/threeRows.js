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
          units={props.units}
          otherUnits={props.otherUnits}
          humidity={props.humidity}
          wind={props.wind}
          dew={props.dew}
          degrees={props.degrees}
        />
        <Imgs icon={props.icon} description={props.description} />
        <Dates
          units={props.units}
          current={props.current}
          realFeel={props.realFeel}
          high={props.high}
          low={props.low}
        />
      </div>
    </div>
  );
}
