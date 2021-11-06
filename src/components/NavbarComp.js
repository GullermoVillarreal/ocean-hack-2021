import React, { Component } from 'react'
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'
import logo192 from './img/logoo.PNG'

export default class NavbarComp extends Component {
    render() {
        return (
            <div className="text-center container-fluid NavbarComp App">
                <Navbar bg="light" expand="lg">
                    <Container className = "NavbarComp">
                        <Navbar.Brand href="#home"><img src={logo192} className="d-block w-40" /> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Aprende</Nav.Link>
                                <Nav.Link href="#link">Medidas para prevenir</Nav.Link>
                                <NavDropdown title="Directorio" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
         </div>
        )
    }
}