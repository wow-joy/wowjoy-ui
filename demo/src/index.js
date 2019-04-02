import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename={`/`}>
    <Route component={App} />
  </BrowserRouter>,
  document.getElementById("demo")
);
registerServiceWorker();
