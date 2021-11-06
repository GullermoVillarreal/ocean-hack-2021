import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

export default class FooterComp extends Component {
    render() {
        return (
            <div className="text-center container-fluid NavbarComp App">
                <Card>
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Ponte en contacto con nosotros</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Prueba nuestra App</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            </div>
        )
    }
}