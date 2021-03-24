import React from "react";

export default function Items(props) {
  return (
    <div className={`${props.mDay} future col-2`}>
      <p className="date1">{props.pDay}</p>
      <img className="icon" src={props.imgSrc} alt={props.imgAlt} />
      <p>{props.description}</p>
      <span>{props.high}</span>
      <span>{props.units}</span>/<span>{props.low}</span>
      <span>{props.units}</span>
    </div>
  );
}
