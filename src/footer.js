import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <p>
        <span>
          <a href="https://github.com/apease-9/weather-app">Open-source code</a>
          by Alia Pease
        </span>
        <br />
        <span id="WeatherData">
          Weather Data Provider:
          <a href="https://openweathermap.org/">OpenWeather</a>
        </span>
      </p>
    </footer>
  );
}
