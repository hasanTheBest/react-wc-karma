import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

// Icons
import "./resource/css/linearicons.css";
import "./resource/css/font-awesome.min.css";
import "./resource/css/themify-icons.css";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
