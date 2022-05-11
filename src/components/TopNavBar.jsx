import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import '../css/TopNavBar.css';

const TopNavBar = () => {
  return (
    <Navbar collapseOnSelect className="my-navbar" expand="lg" variant="dark">
      <Navbar.Brand className="logo me-auto p-2" href="/">
        mento
      </Navbar.Brand>
      <Nav>
        <Nav.Link className="my-nav-link p-3" href="/Login">
          Login
        </Nav.Link>
        <Nav.Link className="my-nav-link p-3" href="/SignUp">
          SignUp
        </Nav.Link>
        <Nav.Link className="my-nav-link p-3" href="/BarberProfile">
          Barber Personal Page
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default TopNavBar;
