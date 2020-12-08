import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Configuration } from "@react-md/layout";

ReactDOM.render(
  <React.StrictMode>
    <Configuration>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Configuration>
  </React.StrictMode>,
  document.getElementById("root")
);
