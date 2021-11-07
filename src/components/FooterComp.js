import React, { Component } from 'react';

import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

export default class FooterComp extends Component {
  render() {
    return (
      <div className="footer-container bg-dark">
        <div className="newsletter-flex">
          Añade tu número si quieres recibir alertas a tiempo
          <div class="input-group mb-3">
            <input type="text" class="form-control " placeholder="Número" />
            <span class="input-group-text" id="basic-addon2">
              Teléfono Celular
            </span>
          </div>
          <div className="alice-flex">
            <a href="https://www.facebook.com/hurakant/">
              <AiFillFacebook fontSize={30} />
            </a>

            <a href="https://www.instagram.com/hurikant/">
              <AiOutlineInstagram fontSize={30} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
