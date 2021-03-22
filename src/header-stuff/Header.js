import React from "react";
import Units from "./unitSwitch";
import Time from "./timeSwitch";
import Animations from "./aniSwitch";
import Form from "./Form.js";

import "./Header.css";

export default function Header(props) {
  return (
    <nav className={`header-stuff ${props.ani}h`}>
      <Units />
      <Time />
      <Animations />
      <br />
      <br />
      <br />
      <br />
      <Form />
      <br />
    </nav>
  );
}
