import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css"
import { Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'

class Navibar extends Component {
  logout() {
    localStorage.removeItem('user')
    localStorage.removeItem('cart')
    document.cookie.split(";").forEach((c) => { //remove all cookies
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    window.location = '/'
  }
  logicalrender = () => {
    if (localStorage.getItem('user') === null) {
      return <Nav>
        <Nav.Link href="/register">
          <Button
            variant="outline-success"
            style={{ marginRight: 50 }} >
            Register
          </Button>
        </Nav.Link>
        <Nav.Link eventKey={2} href="/login">
          <Button
            variant="outline-success"
            style={{ marginRight: 50 }} >
            Login
          </Button>
        </Nav.Link>
      </Nav>
    }
    else if (JSON.parse(localStorage.getItem('user')).usertype === 'enduser') {
      return <Nav>
        <Nav.Link href="/feedback">Feedback</Nav.Link>
        <Nav.Link href="/cart">Cart</Nav.Link>
        <Nav.Link href="/profile">{JSON.parse(localStorage.getItem('user')).name}'s profile</Nav.Link>
        <Button onClick={this.logout}
          variant="outline-success"
          style={{ marginRight: 50 }} >
          Logout
          </Button>
      </Nav>
    }
    else if (JSON.parse(localStorage.getItem('user')).usertype === 'admin') {
      return <div>
        <Nav className="mr-auto">
          <Nav.Link href="/feedback">Feedback</Nav.Link>
          <Nav.Link href='/insert'>Add Service</Nav.Link>
          <Button onClick={this.logout} >Logout</Button>
        </Nav>
      </div>
    }
    else {
      return <h2>Invalid</h2>
    }
  }
  render() {
    return (
      <Navbar expand="lg" className="navbar">
        <img src={require("./img/logo1.jpg")} className="img" alt="" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Brand href="/">Home</Navbar.Brand>
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
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          </Nav>
          {
            this.logicalrender()
          }

        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navibar