import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Burger from "./Burger";
import Popular from "./popCities";
import City from "../src/currentCity/currentCity.js";
import Forecast from "../src/forecast/mainForecast.js";
import Footer from "./footer.js";
import axios from "axios";

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
  let [apiUnits, changeAunits] = useState("metric");

  //////////////////////////////////City///////////////////////////
  let [city, changeCity] = useState("Dublin");
  let [lat, changeLat] = useState(" ");
  let [lon, changeLon] = useState(" ");
  let [humidity, changeHumidity] = useState(" ");
  let [wind, changeWindS] = useState(" ");
  let [current, changeCurrent] = useState(" ");
  let [realFeel, changeFeel] = useState(" ");
  let [high, changeHigh] = useState(" ");
  let [low, changeLow] = useState(" ");
  let [icon, changeIcon] = useState(" ");
  let [description, changeD] = useState(" ");

  function showTemperature(response) {
    changeLat(response.data.coord.lat);
    changeLon(response.data.coord.lon);
    changeHumidity(response.data.main.humidity);
    changeWindS(response.data.wind.speed);
    changeCurrent(response.data.main.temp);
    changeFeel(response.data.main.feels_like);
    changeHigh(response.data.temp_max);
    changeLow(response.data.temp_min);
    changeIcon(response.data.weather.id);
    changeD(response.data.weather.description);
  }

  let apiKey = "100f8a7c29c0b02275197751bc3ff692";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${apiUnits}&appid=${apiKey}`;
  axios.get(apiURL).then(showTemperature);
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
          apiUnits={apiUnits}
          changeAunits={changeAunits}
          city={city}
          changeCity={changeCity}
          changeLat={changeLat}
          changeLon={changeLon}
          changeHumidity={changeHumidity}
          changeWindS={changeWindS}
          changeCurrent={changeCurrent}
          changeFeel={changeFeel}
          changeHigh={changeHigh}
          changeLow={changeLow}
          changeIcon={changeIcon}
          changeD={changeD}
        />
        <nav className="crumbs">
          <div className="pop-links">
            <Popular
              name="Tokyo,Japan"
              id="Tokyo"
              city={city}
              changeCity={changeCity}
              apiUnits={apiUnits}
              changeLat={changeLat}
              changeLon={changeLon}
              changeHumidity={changeHumidity}
              changeWindS={changeWindS}
              changeCurrent={changeCurrent}
              changeFeel={changeFeel}
              changeHigh={changeHigh}
              changeLow={changeLow}
              changeIcon={changeIcon}
              changeD={changeD}
            />
            <Popular
              name="Hong Kong,China"
              id="Hong-Kong"
              city={city}
              changeCity={changeCity}
              apiUnits={apiUnits}
              changeLat={changeLat}
              changeLon={changeLon}
              changeHumidity={changeHumidity}
              changeWindS={changeWindS}
              changeCurrent={changeCurrent}
              changeFeel={changeFeel}
              changeHigh={changeHigh}
              changeLow={changeLow}
              changeIcon={changeIcon}
              changeD={changeD}
            />
            <Popular
              name="Paris,France"
              id="Paris"
              city={city}
              changeCity={changeCity}
              apiUnits={apiUnits}
              changeLat={changeLat}
              changeLon={changeLon}
              changeHumidity={changeHumidity}
              changeWindS={changeWindS}
              changeCurrent={changeCurrent}
              changeFeel={changeFeel}
              changeHigh={changeHigh}
              changeLow={changeLow}
              changeIcon={changeIcon}
              changeD={changeD}
            />
            <Popular
              name="New York City,NY,US"
              id="NY"
              city={city}
              changeCity={changeCity}
              apiUnits={apiUnits}
              changeLat={changeLat}
              changeLon={changeLon}
              changeHumidity={changeHumidity}
              changeWindS={changeWindS}
              changeCurrent={changeCurrent}
              changeFeel={changeFeel}
              changeHigh={changeHigh}
              changeLow={changeLow}
              changeIcon={changeIcon}
              changeD={changeD}
            />
            <Popular
              name="Rome,Italy"
              id="Rome"
              city={city}
              changeCity={changeCity}
              apiUnits={apiUnits}
              changeLat={changeLat}
              changeLon={changeLon}
              changeHumidity={changeHumidity}
              changeWindS={changeWindS}
              changeCurrent={changeCurrent}
              changeFeel={changeFeel}
              changeHigh={changeHigh}
              changeLow={changeLow}
              changeIcon={changeIcon}
              changeD={changeD}
            />
          </div>
        </nav>
        <br />
        <br />
        <City
          time={time}
          units={units}
          otherUnits={other}
          city={city}
          lat={lat}
          lon={lon}
          humidity={humidity}
          wind={wind}
          current={current}
          realFeel={realFeel}
          high={high}
          low={low}
          icon={icon}
          description={description}
        />
        <Forecast units={units} />
        <Footer />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
