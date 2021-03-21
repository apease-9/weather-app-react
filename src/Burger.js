import React, { useState } from "react";
import "./Burger.css";
import Header from "../src/header-stuff/Header";

export default function Burger() {
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
      <Header ani={direction} />
    </div>
  );
}
