import React from "react";
import Display from "./cityDisplay";
import Rows from "./threeRows.js";

export default function City(props) {
  return (
    <div className="city">
      <Display
        time={props.time}
        cityName={props.cityName}
        lat={props.lat}
        lon={props.lon}
      />
      <br />
      <br />
      <Rows
        units={props.cF}
        mSH={props.mSH}
        humidity={props.humidity}
        windSpeed={props.windSpeed}
        temperature={props.temperature}
        realFeel={props.realFeel}
        high={props.high}
        low={props.low}
        icon={props.icon}
        description={props.description}
        windDegree={props.windDegree}
      />
    </div>
  );
}
