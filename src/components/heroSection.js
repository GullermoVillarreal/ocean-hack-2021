import React from 'react';
import Iframe from 'react-iframe';
import heroImg from './img/heroImg.png';
const heroSection = () => {
  return (
    <div className="hero-container">
      <Iframe
        url="https://storage.googleapis.com/tf-tickets/Prueba1.html"
        width="350px"
        height="300px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allow="geolocation"
      />
      <Iframe
        url="https://storage.googleapis.com/tf-tickets/Prueba1.html"
        width="350px"
        height="300px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allow="geolocation"
      />
      <Iframe
        url="https://storage.googleapis.com/tf-tickets/Prueba1.html"
        width="350px"
        height="300px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allow="geolocation"
      />
      {/*   <p className="hero-text">
        No podemos controlar el clima, pero podemos prepararte
      </p> */}
    </div>
  );
};

export default heroSection;
