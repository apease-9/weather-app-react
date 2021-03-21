import React from "react";
import "./Switchs.css";

export default function Time() {
  let timeSwitch = document.querySelector("input[name=switchTime]");
  timeSwitch.addEventListener("change", switchTime);
  function switchTime() {
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
    let todayDate = document.querySelector(".date");
    document.querySelector(".date1").innerHTML = `${days[now.getDay() + 1]}`;
    document.querySelector(".date2").innerHTML = `${days[now.getDay() + 2]}`;
    document.querySelector(".date3").innerHTML = `${days[now.getDay() + 3]}`;
    document.querySelector(".date4").innerHTML = `${days[now.getDay() + 4]}`;
    document.querySelector(".date5").innerHTML = `${days[now.getDay() + 5]}`;
    if (timeSwitch.checked) {
      let date12Format = null;
      if (hour === 12) {
        date12Format = `${day} ${month} ${date}, ${year}, ${hour}:${minutes}PM`;
        todayDate.innerHTML = date12Format;
      } else if (hour >= 13 && hour < 24) {
        date12Format = `${day} ${month} ${date}, ${year}, ${
          hour - 12
        }:${minutes}PM`;
        todayDate.innerHTML = date12Format;
      } else if (hour === 24) {
        date12Format = `${day} ${month} ${date}, ${year}, 12:${minutes}AM`;
        todayDate.innerHTML = date12Format;
      } else {
        date12Format = `${day} ${month} ${date}, ${year}, ${hour}:${minutes}AM`;
        todayDate.innerHTML = date12Format;
      }
    } else {
      let date24Format = `${day} ${month} ${date}, ${year}, ${hour}:${minutes}`;
      todayDate.innerHTML = date24Format;
    }
    setTimeout(switchTime, 1000);
  }
  switchTime();

  return (
    <div id="current-time">
      <span id="24-hour">24-hour</span>
      <label className="switch">
        <input type="checkbox" name="switchTime" />
        <span className="slider round"></span>
      </label>
      <span id="12-hour">12-hour</span>
    </div>
  );
}
