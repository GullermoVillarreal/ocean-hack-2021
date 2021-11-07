import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logo1 from './img/huracan-slider-1.jpg';

export default class FooterComp extends Component {
  render() {
    return (
        <div className="" style={{ backgroundColor: 'red' }}>

        <Carousel variant="dark">
          <Carousel.Item>
            <img className="" src={logo1} alt="First slide" />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
                            <img className="" src={logo1} alt="First slide" />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
                            <img className="" src={logo1} alt="First slide" />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
