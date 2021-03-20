import React from "react";
import "./Switchs.css";

export default function Animations() {
  return (
    <div id="current-bg">
      <span id="ani-on">Animations on</span>
      <label className="switch">
        <input type="checkbox" name="switchAni" />
        <span className="slider round"></span>
      </label>
      <span id="ani-off">Animations off</span>
    </div>
  );
}
