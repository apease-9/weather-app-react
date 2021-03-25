import React from "react";
import ReactAnimatedWeather from "react-animated-weather-updated";

export default function Items(props) {
  if (props.icon >= 200 && props.icon < 300) {
    //thunder
    return (
      <div className={`${props.mDay} future col-2`}>
        <p className="date1">{props.pDay}</p>
        <div>
          <ReactAnimatedWeather
            icon={defaults.icon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
          />
        </div>
        <p>{props.description}</p>
        <span>{props.high}</span>
        <span>{props.units}</span>/<span>{props.low}</span>
        <span>{props.units}</span>
      </div>
    );
  }
  if (
    (props.icon >= 300 && props.icon < 400) ||
    (props.icon >= 500 && props.icon < 600)
  ) {
    //rain
    return (
      <div className={`${props.mDay} future col-2`}>
        <p className="date1">{props.pDay}</p>
        <div>
          <ReactAnimatedWeather
            icon={"RAIN"}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
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
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
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
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
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
            icon={"CLOUDY"}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
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
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
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
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
        />
      </div>
    );
  }
}
