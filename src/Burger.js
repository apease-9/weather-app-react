import React, { useState } from "react";
import "./Burger.css";
import Header from "../src/header-stuff/Header";

export default function Burger(props) {
  let [direction, popBurger] = useState("shrink");
  function toggleBurger() {
    if (direction === "shrink" ? popBurger("pop") : popBurger("shrink"));
  }

  return (
    <div>
      <div className={`burger ${direction}`} onClick={toggleBurger}>
        <div className="line-1" />
        <div className="line-2" />
        <div className="line-3" />
      </div>
      <Header
        ani={direction}
        time={props.time}
        cF={props.cF}
        mSH={props.mSH}
        apiUnits={props.apiUnits}
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
    </div>
  );
}
