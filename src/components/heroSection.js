import React from 'react';
import Iframe from 'react-iframe';

const heroSection = () => {
  return (
    <div className="hero-container">
      <Iframe
        url="https://storage.googleapis.com/tf-tickets/Prueba1.html"
        width="850px"
        height="500px"
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
