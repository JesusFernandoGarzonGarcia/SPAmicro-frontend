import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import NavbarComponent from "./components/NavbarComponent"

import Container from "react-bootstrap/Container"
import {BrowserRouter} from "react-router-dom"

const App = () => (

  <BrowserRouter>
    <Container>
      <NavbarComponent>
        <div>Content</div>
      </NavbarComponent>
    </Container>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
