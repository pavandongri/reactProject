import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'



  const Header = (props) => {
    return <header>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Edvora</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto ">
        <Nav.Link href="#home">{props.user.name}</Nav.Link>
        <Nav.Link href="#link"><img src={props.profile_key} alt ="pic"></img></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      
    </header>
  }
    

export default Header;