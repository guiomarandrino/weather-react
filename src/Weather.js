import React, { useState } from "react";
import "./Weather.css";

export default function Weather(props) {
  const [temperature, setTemperature] = useState(props.temperature);

  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };

  function showFahrenheit(event) {
    event.preventDefault();
    let fahrenheitTemperature = Math.round((props.temperature * 9) / 5 + 32);
    setTemperature(fahrenheitTemperature);
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemperature(props.temperature);
  }

  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <strong>{temperature}</strong>
              <span className="units">
                <a href="/" onClick={showCelsius}>
                  °C
                </a>{" "}
                |{" "}
                <a href="/" onClick={showFahrenheit}>
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
