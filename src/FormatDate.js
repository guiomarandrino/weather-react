import React from "react";

export default function FormatDate(props) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[props.date.getDay()];

  let hour = props.date.getHours();
  if (hour < 10) {
    hour = `0{hour}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {day}, {hour}:{minutes}
    </div>
  );
}
