import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Galery from "./components/Galery";

const App = () => (
  <>
    <Galery/>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
