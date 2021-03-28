import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Burger from "./Burger";
import "./popCities.css";
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

  ///////////////////////////Units////////////////////////////////
  const units = {
    cF: "°C",
    mSH: "m/s",
    apiUnits: "metric",
    time: date24Format,
  };

  //////////////////////////////////City///////////////////////////
  const [weatherData, setData] = useState({ ready: false });
  const [city, changeCity] = useState(" ");

  function showTemperature(response) {
    console.log(city);
    setData({
      cityName: response.data.name,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
      day0: {
        humidity: response.data.main.humidity,
        windSpeed: response.data.wind.speed,
        windDegree: response.data.wind.deg,
        temperature: response.data.main.temp,
        realFeel: response.data.main.feels_like,
        high: response.data.main.temp_max,
        low: response.data.main.temp_min,
        icon: response.data.weather[0].id,
        description: response.data.weather[0].description,
      },
    });

    ///////////////////////////////Forecast//////////////////////////////////
    let forecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherData.day0.lat}&lon=${weatherData.day0.lon}&units=${units.apiUnits}&exclude=current,minutely,hourly,alerts&appid=${apiKey}`;
    axios.get(forecastURL).then(showForecast);
  }

  let apiKey = "100f8a7c29c0b02275197751bc3ff692";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units.apiUnits}&appid=${apiKey}`;

  function showForecast(response) {
    setData({
      ready: true,
      day0: {
        dewPoint: Math.round(response.data.daily[0].dew_point),
      },
      day1: {
        high: Math.round(response.data.daily[1].temp.max),
        low: Math.round(response.data.daily[1].temp.min),
        description: response.data.daily[1].weather[0].description,
        icon: response.data.daily[1].weather[0].id,
      },
      day2: {
        high: Math.round(response.data.daily[2].temp.max),
        low: Math.round(response.data.daily[2].temp.min),
        description: response.data.daily[2].weather[0].description,
        icon: response.data.daily[2].weather[0].id,
      },
      day3: {
        high: Math.round(response.data.daily[3].temp.max),
        low: Math.round(response.data.daily[3].temp.min),
        description: response.data.daily[3].weather[0].description,
        icon: response.data.daily[3].weather[0].id,
      },
      day4: {
        high: Math.round(response.data.daily[4].temp.max),
        low: Math.round(response.data.daily[4].temp.min),
        description: response.data.daily[4].weather[0].description,
        icon: response.data.daily[4].weather[0].id,
      },
      day5: {
        high: Math.round(response.data.daily[5].temp.max),
        low: Math.round(response.data.daily[5].temp.min),
        description: response.data.daily[5].weather[0].description,
        icon: response.data.daily[5].weather[0].id,
      },
    });
  }
  //////////////////Popular Cities////////////////////
  function toggleCityJ(event) {
    event.preventDefault();
    changeCity("Tokyo,JP");
  }
  function toggleCityH(event) {
    event.preventDefault();
    changeCity("Hong Kong,CN");
  }
  function toggleCityP(event) {
    event.preventDefault();
    changeCity("Paris,FR");
  }
  function toggleCityN(event) {
    event.preventDefault();
    changeCity("New York City,NY,US");
  }
  function toggleCityR(event) {
    event.preventDefault();
    changeCity("Rome,IT");
  }
  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="insideApp">
          <Burger
            time={units.time}
            cF={units.cF}
            mSH={units.mSH}
            apiUnits={units.apiUnits}
            city={city}
            changeCity={changeCity}
            lat={units.lat}
            lon={units.lon}
            dewPoint={weatherData.day0.dewPoint}
            windSpeed={weatherData.day0.windSpeed}
            windDegree={weatherData.day0.windDegree}
            temperature={weatherData.day0.temperature}
            realFeel={weatherData.day0.realFeel}
            high={weatherData.day0.high}
            low={weatherData.day0.low}
            icon={weatherData.day0.icon}
            description={weatherData.day0.description}
            cityName={weatherData.cityName}
          />
          <nav className="crumbs">
            <div className="pop-links">
              <div className="crumb" id="Tokyo">
                <a href="_blank" onClick={toggleCityJ}>
                  Tokyo,Japan
                </a>
              </div>
              <div className="crumb" id="Hong-Kong">
                <a href="_blank" onClick={toggleCityH}>
                  Hong Kong,China
                </a>
              </div>
              <div className="crumb" id="Paris">
                <a href="_blank" onClick={toggleCityP}>
                  Paris,France
                </a>
              </div>
              <div className="crumb" id="NY">
                <a href="_blank" onClick={toggleCityN}>
                  New York City,NY,USA
                </a>
              </div>
              <div className="crumb" id="Rome">
                <a href="_blank" onClick={toggleCityR}>
                  Rome,Italy
                </a>
              </div>
            </div>
          </nav>
          <br />
          <br />
          <City
            time={units.time}
            cF={units.cF}
            mSH={units.mSH}
            cityName={weatherData.cityName}
            lat={weatherData.lat}
            lon={weatherData.lon}
            humidity={weatherData.day0.humidity}
            windSpeed={weatherData.day0.windSpeed}
            temperature={weatherData.day0.temperature}
            realFeel={weatherData.day0.realFeel}
            high={weatherData.day0.high}
            low={weatherData.day0.low}
            icon={weatherData.day0.icon}
            description={weatherData.day0.description}
            windDegree={weatherData.day0.degrees}
          />
          <Forecast
            cF={units.cF}
            tempH1={weatherData.day1.high}
            tempH2={weatherData.day2.high}
            tempH3={weatherData.day3.high}
            tempH4={weatherData.day4.high}
            tempH5={weatherData.day5.high}
            tempL1={weatherData.day1.low}
            tempL2={weatherData.day2.low}
            tempL3={weatherData.day3.low}
            tempL4={weatherData.day4.low}
            tempL5={weatherData.day5.low}
            d1={weatherData.day1.description}
            d2={weatherData.day2.description}
            d3={weatherData.day3.description}
            d4={weatherData.day4.description}
            d5={weatherData.day5.description}
            icon1={weatherData.day1.icon}
            icon2={weatherData.day2.icon}
            icon3={weatherData.day3.icon}
            icon4={weatherData.day4.icon}
            icon5={weatherData.day5.icon}
          />
          <Footer />
        </div>
      </div>
    );
  } else {
    axios.get(apiURL).then(showTemperature);
    return (
      <div className="error">
        <p>Loading...</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
