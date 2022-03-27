import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="weatherTemperature">
        <span className="temperature text-center">
          {Math.round(props.celsius)}
        </span>
        <span className="unit">
          ºC |{" "}
          <a href="/" onClick={displayFahrenheit}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="weatherTemperature">
        <span className="temperature text-center">
          {Math.round(fahrenheit)}
        </span>
        <span className="unit">
          <a href="/" onClick={displayCelsius}>
            ºC
          </a>{" "}
          | ºF
        </span>
      </div>
    );
  }
}
