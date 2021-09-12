import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import reportWebVitals from "./reportWebVitals";

function load() {
  // This function will allow other functions to execute only when this is called successfully.
  return new Promise(resolve => {
    ReactDOM.render(<Router>
      <Routes />
    </Router>, document.getElementById('root'), resolve);
  })
}

load().then(() => {
  // When the render is successful, the splash screen will be removed.
  document.body.removeChild(  document.getElementById("splashScreen"));
  if(document.getElementById("root").className === "hidden") {
    document.getElementById("root").className =
    document.getElementById("root").className.replace
        ( /(?:^|\s)hidden(?!\S)/g , '' );
  }
});

//Status log stack dump
reportWebVitals();
