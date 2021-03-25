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
        changeTime={props.changeTime}
        time={props.time}
        units={props.units}
        changeUnits={props.changeUnits}
        changeOther={props.changeOther}
        changeAunits={props.changeAunits}
        changeLat={props.changeLat}
        changeLon={props.changeLon}
        changeHumidity={props.changeHumidity}
        changeWindS={props.changeWindS}
        changeWindD={props.changeWindD}
        changeCurrent={props.changeCurrent}
        changeFeel={props.changeFeel}
        changeHigh={props.changeHigh}
        changeLow={props.changeLow}
        changeIcon={props.changeIcon}
        changeD={props.changeD}
        apiUnits={props.apiUnits}
        changeCity={props.changeCity}
        city={props.city}
        wind={props.wind}
        current={props.current}
        realFeel={props.realFeel}
        high={props.high}
        low={props.low}
        changeC={props.changeC}
      />
    </div>
  );
}
