import React from "react";
import ReactDOM from "react-dom";

import axios from "axios";
import Cookies from "js-cookie";
import ReactGA from "react-ga";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactGA.initialize("G-BN8S7YVDF3");
const token = Cookies.get("authToken");
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App authToken={token} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
