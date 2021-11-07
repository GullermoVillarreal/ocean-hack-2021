import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from './components/heroSection';
import Learn from './components/Learn';
import FooterComp from './components/FooterComp';
import MedidasComp from './components/MedidasComp';


ReactDOM.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="aprende" element={<Learn />} />
      <Route path="medidas-para-prevenir" element={<MedidasComp />} />
      <Route path="directorio" element={<Learn />} />
    </Routes>
    <FooterComp />
  </BrowserRouter>,
  document.getElementById('root')
);
