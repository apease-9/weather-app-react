import React, { useState, useEffect } from "react";
import axios from "axios";
import Items from "./items";

export default function Forecast(props) {
  let [loaded, loadState] = useState({ load: false });
  useEffect(() => {
    loadState({ load: false });
  }, [props.lat]);

  useEffect(() => {
    if (
      props.units === "°C"
        ? loadState({ units: "imp" })
        : loadState({ units: "met" })
    );
  }, [props.units]);

  function forecast() {
    let apiKey = "59179277cd09967203757d7645c1f90e";
    let forecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&units=${props.apiUnits}&exclude=current,minutely,hourly,alerts&appid=${apiKey}`;
    axios.get(forecastURL).then(showForecast);
  }
  let now = new Date();
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

  function showForecast(response) {
    loadState({
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
      load: true,
    });
  }

  if (loaded.load) {
    return (
      <div>
        <br />
        <div className="container forFiv">
          <div className="row fiveDay">
            <Items
              mDay="day1"
              pDay={days[now.getDay() + 1]}
              icon={loaded.day1.icon}
              description={loaded.day1.description}
              high={loaded.day1.high}
              units={props.units}
              low={loaded.day1.low}
            />
            <Items
              mDay="day2"
              pDay={days[now.getDay() + 2]}
              icon={loaded.day2.icon}
              description={loaded.day2.description}
              high={loaded.day2.high}
              units={props.units}
              low={loaded.day2.low}
            />
            <Items
              mDay="day3"
              pDay={days[now.getDay() + 3]}
              icon={loaded.day3.icon}
              description={loaded.day3.description}
              high={loaded.day3.high}
              units={props.units}
              low={loaded.day3.low}
            />
            <Items
              mDay="day4"
              pDay={days[now.getDay() + 4]}
              icon={loaded.day4.icon}
              description={loaded.day4.description}
              high={loaded.day4.high}
              units={props.units}
              low={loaded.day4.low}
            />
            <Items
              mDay="day5"
              pDay={days[now.getDay() + 5]}
              icon={loaded.day5.icon}
              description={loaded.day5.description}
              high={loaded.day5.high}
              units={props.units}
              low={loaded.day5.low}
            />
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  } else {
    forecast();
    return <div>Loading</div>;
  }
}
