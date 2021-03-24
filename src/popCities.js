import React from "react";
import "./popCities.css";
import axios from "axios";

export default function Popular(props) {
  function showTemperature(response) {
    props.changeLat(response.data.coord.lat);
    props.changeLon(response.data.coord.lon);
    props.changeHumidity(response.data.main.humidity);
    props.changeWindS(response.data.wind.speed);
    props.changeCurrent(response.data.main.temp);
    props.changeFeel(response.data.main.feels_like);
    props.changeHigh(response.data.main.temp_max);
    props.changeLow(response.data.main.temp_min);
    props.changeIcon(response.data.weather.id);
    props.changeD(response.data.weather.description);
    props.changeC(response.data.name);
  }

  function toggleCity(event) {
    event.preventDefault();
    props.changeCity(props.name);
    let units = props.apiUnits;
    let apiKey = "100f8a7c29c0b02275197751bc3ff692";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=${units}&appid=${apiKey}`;
    axios.get(apiURL).then(showTemperature);
  }

  return (
    <div>
      <div className="crumb" id={props.id}>
        <a href="_blank" onClick={toggleCity}>
          {props.name}
        </a>
      </div>
    </div>
  );
}
