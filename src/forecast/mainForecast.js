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
          imgSrc={`http://openweathermap.org/img/wn/${props.icon1}@2x.png`}
          imgAlt={props.d1}
          description={props.d1}
          high={props.tempH1}
          units={props.units}
          low={props.tempL1}
        />
        <Items
          mDay="day2"
          pDay={days[now.getDay() + 2]}
          imgSrc={`http://openweathermap.org/img/wn/${props.icon2}@2x.png`}
          imgAlt={props.d2}
          description={props.d2}
          high={props.tempH2}
          units={props.units}
          low={props.tempL2}
        />
        <Items
          mDay="day3"
          pDay={days[now.getDay() + 3]}
          imgSrc={`http://openweathermap.org/img/wn/${props.icon3}@2x.png`}
          imgAlt={props.d3}
          description={props.d3}
          high={props.tempH3}
          units={props.units}
          low={props.tempL3}
        />
        <Items
          mDay="day4"
          pDay={days[now.getDay() + 4]}
          imgSrc={`http://openweathermap.org/img/wn/${props.icon4}@2x.png`}
          imgAlt={props.d4}
          description={props.d4}
          high={props.tempH4}
          units={props.units}
          low={props.tempL4}
        />
        <Items
          mDay="day5"
          pDay={days[now.getDay() + 5]}
          imgSrc={`http://openweathermap.org/img/wn/${props.icon5}@2x.png`}
          imgAlt={props.d5}
          description={props.d5}
          high={props.tempH5}
          units={props.units}
          low={props.tempL5}
        />
        <br />
        <br />
      </div>
    </div>
  );
}
