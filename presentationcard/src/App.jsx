import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import PresentationCard from "./components/PresentationCard";

const App = () => (
  <>
<PresentationCard/>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));

