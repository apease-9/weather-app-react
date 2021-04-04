import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Extra from "./extra";
import Imgs from "./imgs";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import "./footer.css";
import "./Burger.css";
import "./Switchs.css";
import "./Header.css";
import "./imgs.css";
import "./cityDisplay.css";
import "./Switchs.css";
import "./main.css";
import "./allstyles.css";

function App() {
  const [city, changeCity] = useState({
    city: "Dublin",
    country: "IE",
  });
  function searchCity() {
    let apiKey = "59179277cd09967203757d7645c1f90e";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city.city},${city.state},${city.country}&units=${units.apiUnits}&appid=${apiKey}`;
    console.log(apiURL);
    if (city.city.length > 0) {
      function cityExists(apiURL, callback) {
        fetch(apiURL, { method: "head" }).then(function (status) {
          callback(status.ok);
        });
      }
      cityExists(apiURL, function (exists) {
        if (
          exists
            ? axios.get(apiURL).then(showTemperature)
            : alert("😓 Error: could not find city. Please check spelling.")
        );
      });
    }
  }

  function changeCityI(event) {
    event.preventDefault();
    searchCity();
  }
  function updateSearchC(event) {
    event.preventDefault();
    let choosenC = event.target.value;
    console.log(choosenC.trim());
    changeCity({
      city: choosenC.trim(),
    });
  }
  function updateSearchS(event) {
    event.preventDefault();
    let choosenS = event.target.value;
    console.log(choosenS.trim());
    changeCity({
      state: choosenS.trim(),
    });
  }
  function updateSearchT(event) {
    event.preventDefault();
    let choosenT = event.target.value;
    console.log(choosenT.trim());
    changeCity({
      country: choosenT.trim(),
    });
  }

  function showPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(function (position) {
      setData({
        lon: position.coords.longitude,
        lat: position.coords.latitude,
      });
      let apiKey = "59179277cd09967203757d7645c1f90e";
      let positionURL = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=${units.apiUnits}&appid=${apiKey}`;
      axios.get(positionURL).then(showTemperature);
    });
  }
  let [direction, popBurger] = useState("shrink");
  function toggleBurger() {
    if (direction === "shrink" ? popBurger("pop") : popBurger("shrink"));
  }
  function toggleUnits() {
    if (units.cF === "°C") {
      changeUnits({
        cF: "°F",
        mSH: "mph",
        apiUnits: "imperial",
      });
      weatherData.day0.temperature = Math.round(
        weatherData.day0.temperature * (9 / 5) + 32
      );
      weatherData.day0.realFeel = Math.round(
        weatherData.day0.realFeel * (9 / 5) + 32
      );
      weatherData.day0.high = Math.round(weatherData.day0.high * (9 / 5) + 32);
      weatherData.day0.low = Math.round(weatherData.day0.low * (9 / 5) + 32);
      weatherData.day0.windSpeed = Math.round(
        weatherData.day0.windSpeed * 2.237
      );
    } else {
      changeUnits({
        cF: "°C",
        mSH: "m/s",
        apiUnits: "metric",
      });
      weatherData.day0.temperature = Math.round(
        (weatherData.day0.temperature - 32) * (5 / 9)
      );
      weatherData.day0.realFeel = Math.round(
        (weatherData.day0.realFeel - 32) * (5 / 9)
      );
      weatherData.day0.high = Math.round(
        (weatherData.day0.high - 32) * (5 / 9)
      );
      weatherData.day0.low = Math.round((weatherData.day0.low - 32) * (5 / 9));
      weatherData.day0.windSpeed = Math.round(
        weatherData.day0.windSpeed / 2.237
      );
    }
  }
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
  const [units, changeUnits] = useState({
    cF: "°C",
    mSH: "m/s",
    apiUnits: "metric",
    time: date24Format,
  });

  //////////////////////////////////City///////////////////////////
  const [weatherData, setData] = useState({ ready: false });

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
        temperature: Math.round(response.data.main.temp),
        realFeel: Math.round(response.data.main.feels_like),
        high: Math.round(response.data.main.temp_max),
        low: Math.round(response.data.main.temp_min),
        icon: response.data.weather[0].id,
        description: response.data.weather[0].description,
      },
      ready: true,
    });
  }

  //////////////////Popular Cities////////////////////
  function toggleCityJ(event) {
    event.preventDefault();
    changeCity({
      city: "Tokyo",
      country: "JP",
    });
    setData({ ready: false });
  }
  function toggleCityH(event) {
    event.preventDefault();
    changeCity({
      city: "Hong Kong",
      country: "CN",
    });
    setData({ ready: false });
  }
  function toggleCityP(event) {
    event.preventDefault();
    changeCity({
      city: "Paris",
      country: "FR",
    });
    setData({ ready: false });
  }
  function toggleCityN(event) {
    event.preventDefault();
    changeCity({
      city: "New York City",
      state: "NY",
      country: "US",
    });
    setData({ ready: false });
  }
  function toggleCityR(event) {
    event.preventDefault();
    changeCity({
      city: "Rome",
      country: "IT",
    });
    setData({ ready: false });
  }
  if (weatherData.ready) {
    console.log(city);
    return (
      <div className="App">
        <div className="insideApp">
          <div>
            <div className={`burger ${direction}`} onClick={toggleBurger}>
              <div className="line-1" />
              <div className="line-2" />
              <div className="line-3" />
            </div>
            <nav className={`header-stuff ${direction}h`}>
              <div id="current">
                <span id="metric">Metric</span>
                <label className="switch">
                  <input
                    type="checkbox"
                    name="switchUnits"
                    onChange={toggleUnits}
                  />
                  <span className="slider round"></span>
                </label>
                <span id="Imperial">Imperial</span>
              </div>

              <br />
              <br />
              <br />
              <br />
              <div className="cityForm">
                <div id="form">
                  <form className="changeCity" onSubmit={changeCityI}>
                    <input
                      type="text"
                      placeholder="City"
                      className="cityInput"
                      onChange={updateSearchC}
                    />
                    <input
                      type="text"
                      placeholder="State"
                      className="stateInput"
                      onChange={updateSearchS}
                    />
                    <input
                      type="text"
                      placeholder="Country"
                      className="countryInput"
                      onChange={updateSearchT}
                    />
                    <br />
                    <br />
                    <button
                      type="submit"
                      className="citySubmit"
                      id="citySubmit"
                    >
                      Change city
                    </button>
                  </form>
                  <button id="currentLocation" onClick={showPosition}>
                    Use current location
                  </button>
                </div>
              </div>
              <br />
            </nav>
          </div>
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
          <div className="city">
            <div id="currentCity">
              <p>
                <span className="date">{units.time}</span>
              </p>
              <h1 id="search">{weatherData.cityName}</h1>

              <p id="coordinates">
                Lat: {weatherData.lat}, Lon: {weatherData.lon}
              </p>
            </div>
            <br />
            <br />
            <div className="container">
              <div className="currentWeather row">
                <Extra
                  cF={units.cF}
                  mSH={units.mSH}
                  humidity={weatherData.day0.humidity}
                  windSpeed={weatherData.day0.windSpeed}
                  windDegree={weatherData.day0.windDegree}
                />
                <Imgs
                  icon={weatherData.day0.icon}
                  description={weatherData.day0.description}
                />
                <div className="dateBox cbox col-4">
                  <ul>
                    <li id="tempNow">
                      Currently
                      <span className="tempNum unit-0">
                        {weatherData.day0.temperature}
                      </span>
                      <span className="unit">{units.cF}</span>
                    </li>
                    <li>
                      Real Feel:
                      <span className="realFeel unit-0">
                        {weatherData.day0.realFeel}
                      </span>
                      <span className="unit">{units.cF}</span>
                    </li>
                    <li>
                      High:
                      <span className="temp-max unit-0">
                        {weatherData.day0.high}
                      </span>
                      <span className="unit">{units.cF}</span>
                    </li>

                    <li>
                      Low:
                      <span className="temp-min unit-0">
                        {Math.round(weatherData.day0.low)}
                      </span>
                      <span className="unit">{units.cF}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <footer>
            <p>
              <span>
                <a href="https://github.com/apease-9/weather-app">
                  Open-source code
                </a>
                by Alia Pease
              </span>
              <br />
              <span id="WeatherData">
                Weather Data Provider:
                <a href="https://openweathermap.org/">OpenWeather</a>
              </span>
            </p>
          </footer>
        </div>
      </div>
    );
  } else {
    searchCity();
    return (
      <div className="error">
        <p>Loading...</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
