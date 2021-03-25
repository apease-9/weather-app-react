import React, { useState } from "react";
import "./Form.css";
import axios from "axios";

export default function Form(props) {
  let [cityI, chooseCity] = useState(" ");
  let [stateI, chooseState] = useState(" ");
  let [countryI, chooseCountry] = useState(" ");
  let fullInput = `${cityI},${stateI},${countryI}`;
  function showTemperature(response) {
    props.changeLat(response.data.coord.lat);
    props.changeLon(response.data.coord.lon);
    props.changeHumidity(response.data.main.humidity);
    props.changeWindS(response.data.wind.speed);
    props.changeWindD(response.data.wind.deg);
    props.changeCurrent(response.data.main.temp);
    props.changeFeel(response.data.main.feels_like);
    props.changeHigh(response.data.main.temp_max);
    props.changeLow(response.data.main.temp_min);
    props.changeIcon(response.data.weather.id);
    props.changeD(response.data.weather.description);
    props.changeC(response.data.name);
  }

  function changeCity(event) {
    event.preventDefault();
    props.changeCity(fullInput);

    event.preventDefault();
    if (cityI.length > 0) {
      let apiKey = "100f8a7c29c0b02275197751bc3ff692";
      let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${fullInput}&units=${props.apiUnits}&appid=${apiKey}`;
      axios.get(apiURL).then(showTemperature);
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
  function updateSearchC(event) {
    event.preventDefault();
    let choosenC = event.target.value;
    console.log(choosenC.trim());
    chooseCity(choosenC.trim());
  }
  function updateSearchS(event) {
    event.preventDefault();
    let choosenS = event.target.value;
    console.log(choosenS.trim());
    chooseState(choosenS.trim());
  }
  function updateSearchT(event) {
    event.preventDefault();
    let choosenT = event.target.value;
    console.log(choosenT.trim());
    chooseCountry(choosenT.trim());
  }

  function showPosition() {
    navigator.geolocation.getCurrentPosition(function (position) {
      let lon = position.coords.longitude;
      let lat = position.coords.latitude;
      let apiKey = "100f8a7c29c0b02275197751bc3ff692";
      let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${props.apiUnits}`;
      axios.get(apiURL).then(showTemperature);
      props.changeCity(" ");
    });
  }

  return (
    <div className="cityForm">
      <div id="form">
        <form className="changeCity" onSubmit={changeCity}>
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
          <button type="submit" className="citySubmit" id="citySubmit">
            Change city
          </button>
        </form>
        <button id="currentLocation" onClick={showPosition}>
          Use current location
        </button>
      </div>
    </div>
  );
}
