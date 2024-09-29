import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./components/App.css";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector("#root")
);
