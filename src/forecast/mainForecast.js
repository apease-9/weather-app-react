import React from "react";
import "./main.css";
import "bootstrap/dist/css/bootstrap.css";
import Items from "./items";

export default function Forecast(props) {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="container forFiv">
      <div className="row fiveDay">
        <Items
          mDay="day1"
          pDay={days[now.getDay() + 1]}
          imgSrc="http://openweathermap.org/img/wn/10d@2x.png"
          imgAlt="It is snowing"
          description="--"
          high="20"
          units={props.units}
          low="20"
        />
        <Items
          mDay="day2"
          pDay={days[now.getDay() + 2]}
          imgSrc="http://openweathermap.org/img/wn/10d@2x.png"
          imgAlt="It is snowing"
          description="--"
          high="20"
          units={props.units}
          low="20"
        />
        <Items
          mDay="day3"
          pDay={days[now.getDay() + 3]}
          imgSrc="http://openweathermap.org/img/wn/10d@2x.png"
          imgAlt="It is snowing"
          description="--"
          high="20"
          units={props.units}
          low="20"
        />
        <Items
          mDay="day4"
          pDay={days[now.getDay() + 4]}
          imgSrc="http://openweathermap.org/img/wn/10d@2x.png"
          imgAlt="It is snowing"
          description="--"
          high="20"
          units={props.units}
          low="20"
        />
        <Items
          mDay="day5"
          pDay={days[now.getDay() + 5]}
          imgSrc="http://openweathermap.org/img/wn/10d@2x.png"
          imgAlt="It is snowing"
          description="--"
          high="20"
          units={props.units}
          low="20"
        />
        <br />
        <br />
      </div>
    </div>
  );
}
