//You can modifiy the styles in this file
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//You can create new components if you want and import them here
import Map from './components/map';
import NavbarComp from './components/NavbarComp';

function App() {
  return (
      <div className="App">
          <NavbarComp />
      <Map/>
    </div>
  );
}

export default App;
