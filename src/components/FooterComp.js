import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export default class FooterComp extends Component {
  render() {
    return (
      <div className="footer-container">
        <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Ponte en contacto con nosotros</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">By Hurakan't</Card.Footer>
        </Card>
      </div>
    );
  }
}
