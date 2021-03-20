import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Header from "../src/header-stuff/Header";
import Burger from "./Burger";
import Popular from "./popCities";
import City from "../src/currentCity/currentCity.js";
import Forecast from "../src/forecast/mainForecast.js";
import Footer from "./footer.js";

function App() {
  return (
    <div className="App">
      <div className="insideApp">
        <Burger />
        <Header />
        <nav className="crumbs">
          <div className="pop-links">
            <Popular name="Tokyo,Japan" id="Tokyo" />
            <Popular name="Hong Kong,China" id="Hong-Kong" />
            <Popular name="Paris,France" id="Paris" />
            <Popular name="New York City,NY,US" id="NY" />
            <Popular name="Rome,Italy" id="Rome" />
          </div>
        </nav>
        <City />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
