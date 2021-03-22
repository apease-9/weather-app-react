import React from "react";
import "./main.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Forecast() {
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
        <div className="day1 future col-2">
          <p className="date1">{days[now.getDay() + 1]}</p>
          <img
            className="img1 icon"
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="It is snowing"
          />
          <p className="weatherD" id="weather-1">
            --
          </p>
          <span className="tempNum1 unit-0">20</span>
          <span class="unit">°C</span>/
          <span className="tempNum1-1 unit-0">20</span>
          <span class="unit">°C</span>
        </div>
        <div className="day2 future col-2">
          <p className="date2">{days[now.getDay() + 2]}</p>
          <img
            className="img2 icon"
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="It is snowing"
          />
          <p className="weatherD" id="weather-2">
            --
          </p>
          <span className="tempNum2 unit-0">20</span>
          <span class="unit">°C</span> /
          <span className="tempNum2-2 unit-0">20</span>
          <span className="unit">°C</span>
        </div>
        <div className="day3 future col-2">
          <p className="date3">{days[now.getDay() + 3]}</p>
          <img
            className="img3 icon"
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="It is snowing"
          />
          <p className="weatherD" id="weather-3">
            --
          </p>
          <span className="tempNum3 unit-0">20</span>
          <span className="unit">°C</span> /
          <span className="tempNum3-3 unit-0">20</span>
          <span className="unit">°C</span>
        </div>
        <div className="day4 future col-2">
          <p className="date4">{days[now.getDay() + 4]}</p>
          <img
            className="img4 icon"
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="It is snowing"
          />
          <p className="weatherD" id="weather-4">
            --
          </p>
          <span className="tempNum4 unit-0">20</span>
          <span className="unit">°C</span> /
          <span className="tempNum4-4 unit-0">20</span>
          <span className="unit">°C</span>
        </div>
        <div className="day5 future col-2">
          <p className="date5">{days[now.getDay() + 5]}</p>
          <img
            className="img5 icon"
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="It is snowing"
          />
          <p className="weatherD" id="weather-5">
            --
          </p>
          <span className="tempNum5 unit-0">20</span>
          <span className="unit">°C</span> /
          <span className="tempNum5-5 unit-0">20</span>
          <span className="unit">°C</span>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}
