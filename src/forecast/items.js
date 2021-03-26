import React from "react";
import ReactAnimatedWeather from "react-animated-weather-updated";

export default function Items(props) {
  if (props.icon >= 200 && props.icon < 600) {
    //rain
    return (
      <div className={`${props.mDay} future col-2`}>
        <p className="date1">{props.pDay}</p>
        <div>
          <ReactAnimatedWeather
            icon={"RAIN"}
            color={"#31326f"}
            size={50}
            animate={true}
          />
        </div>
        <p>{props.description}</p>
        <span>{props.high}</span>
        <span>{props.units}</span>/<span>{props.low}</span>
        <span>{props.units}</span>
      </div>
    );
  }
  if (props.icon >= 600 && props.icon < 700) {
    //snow
    return (
      <div className={`${props.mDay} future col-2`}>
        <p className="date1">{props.pDay}</p>
        <div>
          <ReactAnimatedWeather
            icon={"SNOW"}
            color={"#78c4d4"}
            size={50}
            animate={true}
          />
        </div>
        <p>{props.description}</p>
        <span>{props.high}</span>
        <span>{props.units}</span>/<span>{props.low}</span>
        <span>{props.units}</span>
      </div>
    );
  }
  if (props.icon > 700 && props.icon < 800) {
    //fog
    return (
      <div className={`${props.mDay} future col-2`}>
        <p className="date1">{props.pDay}</p>
        <div>
          <ReactAnimatedWeather
            icon={"FOG"}
            color={"#6e7c7c"}
            size={50}
            animate={true}
          />
        </div>
        <p>{props.description}</p>
        <span>{props.high}</span>
        <span>{props.units}</span>/<span>{props.low}</span>
        <span>{props.units}</span>
      </div>
    );
  }
  if (props.icon > 800 && props.icon < 900) {
    //cloudy
    return (
      <div className={`${props.mDay} future col-2`}>
        <p className="date1">{props.pDay}</p>
        <div>
          <ReactAnimatedWeather
            icon={"PARTLY_CLOUDY_DAY"}
            color={"#ec9b3b"}
            size={50}
            animate={true}
          />
        </div>
        <p>{props.description}</p>
        <span>{props.high}</span>
        <span>{props.units}</span>/<span>{props.low}</span>
        <span>{props.units}</span>
      </div>
    );
  }
  if (props.icon === 800) {
    //sun
    return (
      <div className={`${props.mDay} future col-2`}>
        <p className="date1">{props.pDay}</p>
        <div>
          <ReactAnimatedWeather
            icon={"CLEAR_DAY"}
            color={"#f4d160"}
            size={50}
            animate={true}
          />
        </div>
        <p>{props.description}</p>
        <span>{props.high}</span>
        <span>{props.units}</span>/<span>{props.low}</span>
        <span>{props.units}</span>
      </div>
    );
  } else {
    return (
      <div>
        <div>--</div>
        <ReactAnimatedWeather
          icon={"RAIN"}
          color={"#000"}
          size={50}
          animate={true}
        />
      </div>
    );
  }
}
