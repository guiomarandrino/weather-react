import React from "react";
import "./App.css";

import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/guiomarandrino/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://jovial-mcclintock-4de24d.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Guiomar Andrino
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
