import React from "react";
import Units from "./unitSwitch";
import Time from "./timeSwitch";
import Form from "./Form.js";

import "./Header.css";

export default function Header(props) {
  return (
    <nav className={`header-stuff ${props.ani}h`}>
      <Units
        units={props.units}
        changeUnits={props.changeUnits}
        changeOther={props.changeOther}
        changeAunits={props.changeAunits}
        changeWindS={props.changeWindS}
        changeCurrent={props.changeCurrent}
        changeFeel={props.changeFeel}
        changeHigh={props.changeHigh}
        changeLow={props.changeLow}
        wind={props.wind}
        current={props.current}
        realFeel={props.realFeel}
        high={props.high}
        low={props.low}
      />
      <Time changeTime={props.changeTime} time={props.time} />
      <br />
      <br />
      <br />
      <br />
      <Form
        changeLat={props.changeLat}
        changeLon={props.changeLon}
        changeHumidity={props.changeHumidity}
        changeWindS={props.changeWindS}
        changeCurrent={props.changeCurrent}
        changeFeel={props.changeFeel}
        changeHigh={props.changeHigh}
        changeLow={props.changeLow}
        changeIcon={props.changeIcon}
        changeD={props.changeD}
        apiUnits={props.apiUnits}
        changeCity={props.changeCity}
        city={props.city}
        changeC={props.changeC}
      />
      <br />
    </nav>
  );
}
