import React from 'react';
import heroImg from './img/heroImg.png';
const heroSection = () => {
  return (
    <div>
      <p className="hero-text">
        No podemos controlar el clima, pero podemos prepararte
      </p>
      <img src={heroImg} alt="heroImg" className="hero-section" />
    </div>
  );
};

export default heroSection;
