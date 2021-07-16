import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from 'react-router-dom';
import App from "./App";

import "./styles.css";
import "./styles.scss";

var mountNode = document.getElementById("app");
ReactDOM.render(
  <Router>
    <App />
  </Router>, mountNode
);