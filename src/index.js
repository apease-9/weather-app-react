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
  let [other, changeOther] = useState("m/s");
  let [apiUnits, changeAunits] = useState("metric");

  //////////////////////////////////City///////////////////////////
  let [city, changeCity] = useState("Dublin,IE");
  let [cityD, changeC] = useState("Dublin");
  let [lat, changeLat] = useState(" ");
  let [lon, changeLon] = useState(" ");
  let [dew, changeDew] = useState(" ");
  let [humidity, changeHumidity] = useState(" ");
  let [wind, changeWindS] = useState(" ");
  let [current, changeCurrent] = useState(" ");
  let [realFeel, changeFeel] = useState(" ");
  let [high, changeHigh] = useState(" ");
  let [low, changeLow] = useState(" ");
  let [icon, changeIcon] = useState(" ");
  let [description, changeD] = useState(" ");
  let [tempH1, changeH1] = useState(" ");
  let [tempH2, changeH2] = useState(" ");
  let [tempH3, changeH3] = useState(" ");
  let [tempH4, changeH4] = useState(" ");
  let [tempH5, changeH5] = useState(" ");
  let [tempL1, changeL1] = useState(" ");
  let [tempL2, changeL2] = useState(" ");
  let [tempL3, changeL3] = useState(" ");
  let [tempL4, changeL4] = useState(" ");
  let [tempL5, changeL5] = useState(" ");
  let [d1, changeD1] = useState(" ");
  let [d2, changeD2] = useState(" ");
  let [d3, changeD3] = useState(" ");
  let [d4, changeD4] = useState(" ");
  let [d5, changeD5] = useState(" ");
  let [icon1, changeI1] = useState(" ");
  let [icon2, changeI2] = useState(" ");
  let [icon3, changeI3] = useState(" ");
  let [icon4, changeI4] = useState(" ");
  let [icon5, changeI5] = useState(" ");

  function showTemperature(response) {
    changeLat(response.data.coord.lat);
    changeLon(response.data.coord.lon);
    changeHumidity(response.data.main.humidity);
    changeWindS(response.data.wind.speed);
    changeCurrent(response.data.main.temp);
    changeFeel(response.data.main.feels_like);
    changeHigh(response.data.main.temp_max);
    changeLow(response.data.main.temp_min);
    changeIcon(response.data.weather.id);
    changeD(response.data.weather.description);
    changeC(response.data.name);

    ///////////////////////////////Forecast//////////////////////////////////

    let forecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${apiUnits}&exclude=current,minutely,hourly,alerts&appid=${apiKey}`;
    axios.get(forecastURL).then(showForecast);
  }

  function showForecast(response) {
    //Mac and min forcast
    changeH1(Math.round(response.data.daily[1].temp.max));
    changeL1(Math.round(response.data.daily[1].temp.min));
    changeH2(Math.round(response.data.daily[2].temp.max));
    changeL2(Math.round(response.data.daily[2].temp.min));
    changeH3(Math.round(response.data.daily[3].temp.max));
    changeL3(Math.round(response.data.daily[3].temp.min));
    changeH4(Math.round(response.data.daily[4].temp.max));
    changeL4(Math.round(response.data.daily[4].temp.min));
    changeH5(Math.round(response.data.daily[5].temp.max));
    changeL5(Math.round(response.data.daily[5].temp.min));

    //Dew Point
    changeDew(Math.round(response.data.daily[0].dew_point));

    //Weather Descriptions
    changeD1(response.data.daily[1].weather[0].description);
    changeD2(response.data.daily[2].weather[0].description);
    changeD3(response.data.daily[3].weather[0].description);
    changeD4(response.data.daily[4].weather[0].description);
    changeD5(response.data.daily[5].weather[0].description);

    //Make an if statement to change weather icon based on what the main idea is (ie. rain, snow, sun, cloudy)
    changeI1(response.data.daily[1].weather[0].icon);
    changeI2(response.data.daily[2].weather[0].icon);
    changeI3(response.data.daily[3].weather[0].icon);
    changeI4(response.data.daily[4].weather[0].icon);
    changeI5(response.data.daily[5].weather[0].icon);
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
          changeC={changeC}
          wind={wind}
          current={current}
          realFeel={realFeel}
          high={high}
          low={low}
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
              changeC={changeC}
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
              changeC={changeC}
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
              changeC={changeC}
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
              changeC={changeC}
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
              changeC={changeC}
            />
          </div>
        </nav>
        <br />
        <br />
        <City
          time={time}
          units={units}
          otherUnits={other}
          city={cityD}
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
          dew={dew}
        />
        <Forecast
          units={units}
          tempH1={tempH1}
          tempH2={tempH2}
          tempH3={tempH3}
          tempH4={tempH4}
          tempH5={tempH5}
          tempL1={tempL1}
          tempL2={tempL2}
          tempL3={tempL3}
          tempL4={tempL4}
          tempL5={tempL5}
          d1={d1}
          d2={d2}
          d3={d3}
          d4={d4}
          d5={d5}
          icon1={icon1}
          icon2={icon2}
          icon3={icon3}
          icon4={icon4}
          icon5={icon5}
        />
        <Footer />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
