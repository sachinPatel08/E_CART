import React from "react";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink style={{textDecoration:"none"}} to="/">
          <Navbar.Brand >E-Cart</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="ml-0">
            <Nav className="">
           
              <Nav.Link>
              <NavLink style={{textDecoration:"none"}} to="/cart">Cart
              </NavLink>
              </Nav.Link>
             
              <Nav.Link> <NavLink style={{textDecoration:"none"}} to="/">Products
              </NavLink></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
