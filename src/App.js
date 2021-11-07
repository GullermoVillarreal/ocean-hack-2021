//You can modifiy the styles in this file
import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from './components/CarouselComp';
import React from 'react';
import './App.css';
import FooterComp from './components/FooterComp';
import HeroSection from './components/heroSection';
import NavbarComp from './components/NavbarComp';
import CarouselComp from './components/CarouselComp';

function App() {
  return (
    <div className="App">
      <NavbarComp />
      
          <HeroSection />
          <CarouselComp />
          <FooterComp />

    </div>
  );
}

export default App;
