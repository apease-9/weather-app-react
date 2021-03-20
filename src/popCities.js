import React from "react";
import "./popCities.css";

export default function Popular(props) {
  return (
    <div>
      <div className="crumb" id={props.id}>
        <a href="_blank">{props.name}</a>
      </div>
    </div>
  );
}
