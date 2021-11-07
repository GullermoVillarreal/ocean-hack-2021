import React, { Component } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import Form from 'react-bootstrap/Form'


export default class FooterComp extends Component {
  render() {
    return (
      <div className="footer-container">
            <Card.Header>

            </Card.Header>
           
        <Card.Body>
          <Card.Title>Ponte en contacto con nosotros</Card.Title>
                <Card.Text>
                   <div className="newsletter-flex">
                   <div class="input-group mb-3">
                      <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                      <span class="input-group-text" id="basic-addon2">@example.com</span>
                    </div>
                        
                    </div>

                <div className="alice-flex">
                    <a href="https://www.facebook.com/hurakant/">
                    <AiFillFacebook fontSize={50} />
                    </a>

                    <a href="https://www.instagram.com/hurikant/">
                        <AiOutlineInstagram fontSize={50} />
                    </a>
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">By Hurakan't</Card.Footer>
      </div>
    );
  }
}
