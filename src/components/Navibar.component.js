import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css"
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

class Navibar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Wedding Bellz</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#features">Services</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/services/photographer">Photographers</NavDropdown.Item>
              <NavDropdown.Item href="/services/venue">Venue</NavDropdown.Item>
              <NavDropdown.Item href="/services/bridalwear">Bridal Wear</NavDropdown.Item>
              <NavDropdown.Item href="/services/groomwear">Groom Wear</NavDropdown.Item>
              <NavDropdown.Item href="/services/makeup">Makeup</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link eventKey={2} href="/login">Login</Nav.Link>
            <Nav.Link href="/profile">profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navibar