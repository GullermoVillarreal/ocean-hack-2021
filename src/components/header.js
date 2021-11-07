import React from 'react';
import './styles/header_styles.css';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';

const header = () => {
  return (
    <div content="charset=utf-8">
      <Navbar bg="dark" expand="lg">
        <Container bg="dark">
          <Navbar.Brand href="#home">
            <img
              src="./public/logo192.png"
              alt="img"
              className="d-block w-100"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">�Qu� es un hurac�n?</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default header;
