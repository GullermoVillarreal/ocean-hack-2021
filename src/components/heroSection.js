import React from 'react';
import Iframe from 'react-iframe';
const heroSection = () => {
  return (
    <div className="hero-container">
      {/* <img src={heroImg} alt="heroImg" className="hero-img" /> */}
      <Iframe
        url="https://storage.googleapis.com/tf-tickets/Prueba1.html"
        width="1200px"
        height="850px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
      />
      {/*   <p className="hero-text">
        No podemos controlar el clima, pero podemos prepararte
      </p> */}
    </div>
  );
};

export default heroSection;
