import React, { useState } from "react";
import "./Weather.css";
import FormatDate from "./FormatDate.js";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row mt-3 mb-3">
        <div className="col-6">
          <h1 className="city text-center">{props.data.city}</h1>
        </div>
        <div className="col-6">
          <ul className="date">
            <li>
              <FormatDate date={props.data.date} />
            </li>
            <li>{props.data.description}</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ul className="info">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>

        <div className="col-3 text-center">
          <WeatherIcon code={props.data.icon} />
        </div>
        <div className="col-3">
          <span className="temperature text-center">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">ºC</span>
        </div>
      </div>
    </div>
  );
}
