import React from "react";
import "./imgs.css";

export default function Imgs(props) {
  if (props.icon >= 200 && props.icon < 300) {
    return (
      <div className="imgBox cbox col-4">
        <p id="weatherDescription" className="weatherD">
          {props.description}
        </p>
        <br />
        <br />
        <div className="weather-img">
          <div className="thunder_storm">
            <div className="cloud cloud_style_1"></div>
            <div className="thunder">
              <div className="bolt"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (
    (props.icon >= 300 && props.icon < 400) ||
    (props.icon >= 500 && props.icon < 600)
  ) {
    return (
      <div className="imgBox cbox col-4">
        <p id="weatherDescription" className="weatherD">
          {props.description}
        </p>
        <br />
        <br />
        <div className="weather-img">
          <div className="rainy">
            <div className="cloud cloud_style_1"></div>
            <div className="rain">
              <div className="drop"></div>
              <div className="drop"></div>
              <div className="drop"></div>
              <div className="drop"></div>
              <div className="drop"></div>
              <div className="drop"></div>
              <div className="drop"></div>
              <div className="drop"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (props.icon >= 600 && props.icon < 700) {
    return (
      <div className="imgBox cbox col-4">
        <p id="weatherDescription" className="weatherD">
          {props.description}--
        </p>
        <br />
        <br />
        <div className="weather-img">
          <div className="snowing">
            <div className="cloud cloud_style_1"></div>
            <div className="snow">
              <div className="fall"></div>
              <div className="fall"></div>
              <div className="fall"></div>
              <div className="fall"></div>
              <div className="fall"></div>
              <div className="fall"></div>
              <div className="fall"></div>
              <div className="fall"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (props.icon > 700 && props.icon < 800) {
    return (
      <div className="imgBox cbox col-4">
        <p id="weatherDescription" className="weatherD">
          {props.description}--
        </p>
        <br />
        <br />
        <div className="weather-img">
          <div className="foggy">
            <div className="mist mist_style_1"></div>
            <div className="fog">
              <div className="misty"></div>
              <div className="misty"></div>
              <div className="misty"></div>
              <div className="misty"></div>
              <div className="misty"></div>
              <div className="misty"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (props.icon > 800 && props.icon < 900) {
    return (
      <div className="imgBox cbox col-4">
        <p id="weatherDescription" className="weatherD">
          {props.description}--
        </p>
        <br />
        <br />
        <div className="weather-img">
          <div className="cloudy">
            <div className="cloud cloud_style_2"></div>
            <div className="cloudy"></div>
          </div>
        </div>
      </div>
    );
  }
  if (props.icon === 800) {
    return (
      <div className="imgBox cbox col-4">
        <p id="weatherDescription" className="weatherD">
          {props.description}--
        </p>
        <br />
        <br />
        <div className="weather-img">
          <div className="sunny">
            <div className="sun sun_style_1"></div>
            <div className="shine">
              <div className="ray"></div>
              <div className="ray"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>--</div>;
  }
}
