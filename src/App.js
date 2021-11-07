//You can modifiy the styles in this file
import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from './components/CarouselComp';
import React from 'react';
import './App.css';
import logo from './components/img/logoo.PNG';

import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navBar">
        <img className="logo" src={logo} alt="logo" />
        <Link className="links" to="/">
          Inicio
        </Link>
        <Link className="links" to="/aprende">
          Aprende
        </Link>
        <Link className="links" to="/medidas-para-prevenir">
          Medidas para prevenir
        </Link>
        <Link className="links" to="/directorio">
          Directorio
        </Link>
        <p className="seguimos">¡SEGUIMOS TRABAJANDO EN NUESTRA WEB! </p>
      </nav>
    </div>
  );
}

export default App;
