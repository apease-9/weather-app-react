import React from "react";
import "./imgs.css";

export default function Imgs(props) {
  return (
    <div className="imgBox cbox col-4">
      <p id="weatherDescription" className="weatherD">
        {props.description}
      </p>
      <br />
      <br />
      <div className="weather-img">
        <div className="main-img">
          <div className="img-style"></div>
          <div className="img-ani">
            <div className="img-ani-child"></div>
            <div className="img-ani-child"></div>
            <div className="img-ani-child"></div>
            <div className="img-ani-child"></div>
            <div className="img-ani-child"></div>
            <div className="img-ani-child"></div>
            <div className="img-ani-child"></div>
            <div className="img-ani-child"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
//icon={props.icon}
