import React from "react";
import Units from "./unitSwitch";
import Time from "./timeSwitch";
import Form from "./Form.js";

import "./Header.css";

export default function Header(props) {
  return (
    <nav className={`header-stuff ${props.ani}h`}>
      <Units cF={props.cF} mSH={props.mSH} apiUnits={props.apiUnits} />
      <Time time={props.time} />
      <br />
      <br />
      <br />
      <br />
      <Form
        city={props.city}
        changeCity={props.changeCity}
        lat={props.lat}
        lon={props.lon}
        dewPoint={props.dewPoint}
        windSpeed={props.windSpeed}
        windDegree={props.windDegree}
        temperature={props.temperature}
        realFeel={props.realFeel}
        high={props.high}
        low={props.low}
        icon={props.icon}
        description={props.description}
        cityName={props.cityName}
      />
      <br />
    </nav>
  );
}
