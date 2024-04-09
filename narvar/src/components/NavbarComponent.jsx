import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={NavLink} to={"/"}>Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to={"/Home"}>Home</Nav.Link>
          <Nav.Link as={NavLink} to={"/Characters"}>Characters</Nav.Link>
          <Nav.Link as={NavLink} to={"/About"}>About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;