let apiKey = "59179277cd09967203757d7645c1f90e";
    let forecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&units=${units.apiUnits}&exclude=current,minutely,hourly,alerts&appid=${apiKey}`;
    axios.get(forecastURL).then(showForecast);
    console.log(forecastURL);
  }

  function showForecast(response) {
    setData({
      ready: true,
      day0: {
        dewPoint: Math.round(response.data.daily[0].dew_point),
      },
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
    });
  }

<div className="container forFiv">
  <div className="row fiveDay">
    <Items
      mDay="day1"
      pDay={days[now.getDay() + 1]}
      icon={weatherData.day1.icon}
      description={weatherData.day1.description}
      high={weatherData.day1.high}
      units={units.cF}
      low={weatherData.day1.low}
    />
    <Items
      mDay="day2"
      pDay={days[now.getDay() + 2]}
      icon={weatherData.day2.icon}
      description={weatherData.day2.description}
      high={weatherData.day2.high}
      units={units.cF}
      low={weatherData.day2.low}
    />
    <Items
      mDay="day3"
      pDay={days[now.getDay() + 3]}
      icon={weatherData.day3.icon}
      description={weatherData.day3.description}
      high={weatherData.day3.high}
      units={units.cF}
      low={weatherData.day3.low}
    />
    <Items
      mDay="day4"
      pDay={days[now.getDay() + 4]}
      icon={weatherData.day4.icon}
      description={weatherData.day4.description}
      high={weatherData.day4.high}
      units={units.cF}
      low={weatherData.day4.low}
    />
    <Items
      mDay="day5"
      pDay={days[now.getDay() + 5]}
      icon={weatherData.day5.icon}
      description={weatherData.day5.description}
      high={weatherData.day5.high}
      units={units.cF}
      low={weatherData.day5.low}
    />
    <br />
    <br />
  </div>
</div>;
