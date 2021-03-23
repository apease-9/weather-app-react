import React from "react";

export default function Display(props) {
  return (
    <div id="currentCity">
      <p>
        <span className="date">{props.time}</span>
      </p>
      <h1 id="search">Raleigh</h1>

      <p id="coordinates">--</p>
    </div>
  );
}
