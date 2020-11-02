import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-bootstrap';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const  navBar = ()=> { 
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Whipala</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Remeras</Nav.Link>
      <Nav.Link href="#pricing">Pantalones</Nav.Link>
    </Nav>
    <Nav>
    </Nav>
  </Navbar.Collapse>
</Navbar>
 );
}

export default navBar;