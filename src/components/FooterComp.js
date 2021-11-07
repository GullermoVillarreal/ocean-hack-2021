import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

export default class FooterComp extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="newsletter-flex">
          Añade tu número si quieres recibir alertas a tiempo
          <div class="input-group mb-3">
            <input type="text" class="form-control w-80" placeholder="Número" />
            <span class="input-group-text" id="basic-addon2">
              Teléfono Celular
            </span>
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
        <Card.Footer className="text-muted">By Hurakan't</Card.Footer>
      </div>
    );
  }
}
