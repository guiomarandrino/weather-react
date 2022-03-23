import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].main,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/rain_heavy.png",
      date: "Monday 19:00",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn w-100" />
            </div>
          </div>
        </form>
        <div className="row mt-3 mb-3">
          <div className="col-6">
            <h1 className="city text-center">{weatherData.city}</h1>
          </div>
          <div className="col-6">
            <ul className="date">
              <li>{weatherData.date}</li>
              <li>{weatherData.description}</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <ul className="info">
              <li>Precipitation: 100%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
          <div className="col-6 text-center">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">ºC</span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "d0b1e479fc5064851c4adfb88cebfb69";
    let city = "Madrid";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
