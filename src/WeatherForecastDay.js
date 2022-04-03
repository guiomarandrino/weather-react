import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";

export default function WeatherpForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast text-center">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={35} />
      <div className="WeatherForecast-temp">
        <span>{maxTemperature()}º |</span>
        <span> {minTemperature()}º</span>
      </div>
    </div>
  );
}
