import React, { Component } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from './img/logoo.PNG';

export default class NavbarComp extends Component {
  render() {
    return (
      <div className="">
        <Navbar bg="light" expand="lg">
          <Container className="NavbarComp">
            <Navbar.Brand href="#home">
              <img src={logo} alt="logo" className="d-block w-40" />{' '}
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Aprende</Nav.Link>
                <Nav.Link href="#link">Medidas para prevenir</Nav.Link>
                <NavDropdown title="Directorio" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Button variant="primary">Prueba nuestra App</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
