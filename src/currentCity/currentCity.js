import React from "react";
import Display from "./cityDisplay";
import Rows from "./threeRows.js";

export default function City(props) {
  return (
    <div className="city">
      <Display
        time={props.time}
        city={props.city}
        lat={props.lat}
        lon={props.lon}
      />
      <br />
      <br />
      <Rows
        units={props.units}
        otherUnits={props.otherUnits}
        humidity={props.humidity}
        wind={props.wind}
        current={props.current}
        realFeel={props.realFeel}
        high={props.high}
        low={props.low}
        icon={props.icon}
        description={props.description}
      />
    </div>
  );
}
