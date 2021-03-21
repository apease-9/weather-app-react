import React from "react";
import Units from "./unitSwitch";
import Time from "./timeSwitch";
import Animations from "./aniSwitch";
import Form from "./Form.js";

import "./Header.css";

export default function Header(props) {
  /* let list = document.querySelector(".header-stuff");
  let burger = props.ani;
  if (burger === "shrink") {
    list.animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(100%)" }],
      {
        duration: 1000,
        easing: "cubic-bezier(0.42, 0, 0.58, 1)",
      }
    );
    list.style.transform = "translateX(100%)";
  } else {
    list.animate(
      [{ transform: "translateX(100%)" }, { transform: "translateX(0)" }],
      {
        duration: 1000,
        easing: "cubic-bezier(0.42, 0, 0.58, 1)",
      }
    );
    list.style.transform = "translateX(0)";
  }
*/
  return (
    <div className="header-stuff">
      <Units />
      <Time />
      <Animations />
      <br />
      <br />
      <br />
      <br />
      <Form />
      <br />
    </div>
  );
}
