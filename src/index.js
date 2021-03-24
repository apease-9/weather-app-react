import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Burger from "./Burger";
import Popular from "./popCities";
import City from "../src/currentCity/currentCity.js";
import Forecast from "../src/forecast/mainForecast.js";
import Footer from "./footer.js";

function App() {
  //////////////////////date///////////////////////////////////////
  function zeroAdd(m) {
    if (m < 10) {
      m = "0" + m;
    }
    return m;
  }

  let now = new Date();
  let date = now.getDate();
  let hour = zeroAdd(now.getHours());
  let minutes = zeroAdd(now.getMinutes());
  let year = now.getFullYear();
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
  let day = days[now.getDay()];

  let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];
  let date24Format = `${day} ${month} ${date}, ${year}, ${hour}:${minutes}`;
  const [time, changeTime] = useState(date24Format);
  ///////////////////////////Units////////////////////////////////
  let [units, changeUnits] = useState("°C");
  let [other, changeOther] = useState("km/h");

  //////////////////////////////////City///////////////////////////
  //let [city, changeCity]= useState ("Dublin");

  return (
    <div className="App">
      <div className="insideApp">
        <Burger
          changeTime={changeTime}
          time={time}
          units={units}
          changeUnits={changeUnits}
          otherUnits={other}
          changeOther={changeOther}
        />
        <nav className="crumbs">
          <div className="pop-links">
            <Popular name="Tokyo,Japan" id="Tokyo" />
            <Popular name="Hong Kong,China" id="Hong-Kong" />
            <Popular name="Paris,France" id="Paris" />
            <Popular name="New York City,NY,US" id="NY" />
            <Popular name="Rome,Italy" id="Rome" />
          </div>
        </nav>
        <br />
        <br />
        <City time={time} units={units} otherUnits={other} />
        <Forecast units={units} />
        <Footer />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
