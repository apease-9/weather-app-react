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
          icon={props.icon1}
          description={props.d1}
          high={props.tempH1}
          units={props.units}
          low={props.tempL1}
        />
        <Items
          mDay="day2"
          pDay={days[now.getDay() + 2]}
          icon={props.icon2}
          description={props.d2}
          high={props.tempH2}
          units={props.units}
          low={props.tempL2}
        />
        <Items
          mDay="day3"
          pDay={days[now.getDay() + 3]}
          icon={props.icon3}
          description={props.d3}
          high={props.tempH3}
          units={props.units}
          low={props.tempL3}
        />
        <Items
          mDay="day4"
          pDay={days[now.getDay() + 4]}
          icon={props.icon4}
          description={props.d4}
          high={props.tempH4}
          units={props.units}
          low={props.tempL4}
        />
        <Items
          mDay="day5"
          pDay={days[now.getDay() + 5]}
          icon={props.icon5}
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
