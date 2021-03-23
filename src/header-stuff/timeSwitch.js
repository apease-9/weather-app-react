import React from "react";
import "./Switchs.css";

export default function Time(props) {
  function toggleTime() {
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
    let date24Format = `${day} ${month} ${date}, ${year}, ${hour}:${minutes}`;
    props.changeTime(date24Format);
    if (props.time === date24Format) {
      let date12Format = null;
      if (hour === 12) {
        date12Format = `${day} ${month} ${date}, ${year}, ${hour}:${minutes}PM`;
        props.changeTime(date12Format);
      } else if (hour >= 13 && hour < 24) {
        date12Format = `${day} ${month} ${date}, ${year}, ${
          hour - 12
        }:${minutes}PM`;
        props.changeTime(date12Format);
      } else if (hour === 24) {
        date12Format = `${day} ${month} ${date}, ${year}, 12:${minutes}AM`;
        props.changeTime(date12Format);
      } else {
        date12Format = `${day} ${month} ${date}, ${year}, ${hour}:${minutes}AM`;
        props.changeTime(date12Format);
      }
    } else {
      props.changeTime(date24Format);
    }
  }
  return (
    <div id="current-time">
      <span id="24-hour">24-hour</span>
      <label className="switch">
        <input type="checkbox" name="switchTime" onChange={toggleTime} />
        <span className="slider round"></span>
      </label>
      <span id="12-hour">12-hour</span>
    </div>
  );
}
