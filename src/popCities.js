import React from "react";
import "./popCities.css";
import axios from "axios";

export default function Popular(props) {
  function showTemperature(response) {
    alert(
      `The temperature in ${props.name} is currently ${Math.round(
        response.data.main.temp
      )}`
    );
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
