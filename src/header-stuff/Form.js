import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="cityForm">
      <div id="form">
        <form className="changeCity">
          <input type="text" placeholder="City" className="cityInput" />
          <input type="text" placeholder="State" className="stateInput" />
          <input type="text" placeholder="Country" className="countryInput" />
          <br />
          <br />
          <button type="submit" className="citySubmit" id="citySubmit">
            Change city
          </button>
        </form>
        <button id="currentLocation">Use current location</button>
      </div>
    </div>
  );
}
