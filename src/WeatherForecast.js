import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="forecast-day text-center">{forecast[0].dt}</div>
            <WeatherIcon code={forecast[0].weather[0].icon} size={35} />
            <div className="WeatherForecast-temp">
              <span className="max-temp">
                {Math.round(forecast[0].temp.max)}º |
              </span>
              <span className="min-temp">
                {" "}
                {Math.round(forecast[0].temp.min)}º
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "d0b1e479fc5064851c4adfb88cebfb69";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=~${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
