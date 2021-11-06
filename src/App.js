//You can modifiy the styles in this file
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//You can create new components if you want and import them here
import Map from './components/map';
import NavbarComp from './components/NavbarComp';
import FooterComp from './components/FooterComp';
import Carousel from './components/CarouselComp';

function App() {
  return (
      <div className="App">
          <NavbarComp />
          <Carousel />
          <Map />
          <FooterComp />
    </div>
  );
}

export default App;
