import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { FaBeer } from 'react-icons/fa';
import { AiFillFacebook } from 'react-icons/ai';

export default class FooterComp extends Component {
  render() {
    return (
      <div className="footer-container">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Ponte en contacto con nosotros</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
            <div className="alice-flex">
              <a href="https://www.facebook.com/">
                <AiFillFacebook fontSize={50} />
              </a>
              <FaBeer fontSize={50} />
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">By Hurakan't</Card.Footer>
      </div>
    );
  }
}
