import React, { useState } from "react";

export default function Display(props) {
  function zeroAdd(m) {
    if (m < 10) {
      m = "0" + m;
    }
    return m;
  }

  let now = new Date();
  let date = now.getDate();
  let hour = zeroAdd(now.getHours());
  let minutes = zeroAdd(now.getMinutes());
  let year = now.getFullYear();
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
  let day = days[now.getDay()];

  let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];
  let [timeDate, changeDate] = useState(" ");

  if (props.time === "12") {
    let date12Format = null;
    if (hour === 12) {
      date12Format = `${day} ${month} ${date}, ${year}, ${hour}:${minutes}PM`;
      changeDate(date12Format);
    } else if (hour >= 13 && hour < 24) {
      date12Format = `${day} ${month} ${date}, ${year}, ${
        hour - 12
      }:${minutes}PM`;
      changeDate(date12Format);
    } else if (hour === 24) {
      date12Format = `${day} ${month} ${date}, ${year}, 12:${minutes}AM`;
      changeDate(date12Format);
    } else {
      date12Format = `${day} ${month} ${date}, ${year}, ${hour}:${minutes}AM`;
      changeDate(date12Format);
    }
  } else {
    let date24Format = `${day} ${month} ${date}, ${year}, ${hour}:${minutes}`;
    changeDate(date24Format);
  }
  console.log(timeDate);
  return (
    <div id="currentCity">
      <p>
        <span className="date">{timeDate}</span>
      </p>
      <h1 id="search">Raleigh</h1>

      <p id="coordinates">--</p>
    </div>
  );
}
