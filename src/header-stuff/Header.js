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
      />
      <Time changeTime={props.changeTime} time={props.time} />
      <br />
      <br />
      <br />
      <br />
      <Form />
      <br />
    </nav>
  );
}
