import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CollapsibleNav} from 'react-bootstrap';


export default class MyNavbar extends Component {

  render() {

    return (
      <Navbar inverse collapseOnSelect onSelect={()=>{}} fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <span className="logo">NatPat</span>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
          <NavItem eventKey={1} href="https://google.com" target="_blank" className="nav-link">Hola</NavItem>
          <NavItem eventKey={1} href="#about" className="nav-link">Hola</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

//
// <Navbar.Link eventKey={1} href="home">Home</Navbar.Link>
// <Navbar.Link eventKey={2} href="#about">About</Navbar.Link>
// <Navbar.Link eventKey={3} href="#services">Stats</Navbar.Link>
// <Navbar.Link eventKey={4} href="#folio">Projects</Navbar.Link>
// <Navbar.Link eventKey={5} href="#contact">Contact</Navbar.Link>
// <Navbar.Link eventKey={6} href="https://syntaxerro.wordpress.com/" target="_blank">Blog</Navbar.Link>
