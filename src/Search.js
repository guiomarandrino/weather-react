import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Search(props) {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d0b1e479fc5064851c4adfb88cebfb69&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city.."
        onChange={updateCity}
        className="form-control"
        autoComplete="off"
      />
      <input type="submit" value="Search" className="btn btn-primary w-100" />
    </form>
  );

  if (loaded) {
    return (
      <div className="Weather">
        <div>
          {form}
          <ul>
            <li>Temperature: {Math.round(weather.temperature)}°C</li>
            <li>Description: {weather.description}</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind: {weather.wind}km/h</li>
            <li>
              <img src={weather.icon} alt={weather.description} />
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
