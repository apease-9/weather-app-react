import React from "react";
import "./popCities.css";
import axios from "axios";

export default function Popular(props) {
  props.changeCity(" ");
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
    props.changeIcon(response.data.weather[0].id);
    props.changeD(response.data.weather[0].description);
    props.changeC(response.data.name);
  }

  function toggleCityJ(event) {
    event.preventDefault();
    props.changeCity("Tokyo,JP");
    let units = props.apiUnits;
    let apiKey = "100f8a7c29c0b02275197751bc3ff692";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=${units}&appid=${apiKey}`;
    axios.get(apiURL).then(showTemperature);
  }
  function toggleCityH(event) {
    event.preventDefault();
    props.changeCity("Hong Kong,CN");
    let units = props.apiUnits;
    let apiKey = "100f8a7c29c0b02275197751bc3ff692";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=${units}&appid=${apiKey}`;
    axios.get(apiURL).then(showTemperature);
  }
  function toggleCityP(event) {
    event.preventDefault();
    props.changeCity("Paris,FR");
    let units = props.apiUnits;
    let apiKey = "100f8a7c29c0b02275197751bc3ff692";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=${units}&appid=${apiKey}`;
    axios.get(apiURL).then(showTemperature);
  }
  function toggleCityN(event) {
    event.preventDefault();
    props.changeCity("New York City,NY,US");
    let units = props.apiUnits;
    let apiKey = "100f8a7c29c0b02275197751bc3ff692";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=${units}&appid=${apiKey}`;
    axios.get(apiURL).then(showTemperature);
  }
  function toggleCityR(event) {
    event.preventDefault();
    props.changeCity("Rome,IT");
    let units = props.apiUnits;
    let apiKey = "100f8a7c29c0b02275197751bc3ff692";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=${units}&appid=${apiKey}`;
    axios.get(apiURL).then(showTemperature);
  }

  return (
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
  );
}
