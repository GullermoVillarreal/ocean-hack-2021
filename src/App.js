//You can modifiy the styles in this file
import './App.css';
//You can create new components if you want
import Map from './components/map';

//Once you have created a component you can import it
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Map />
      </header>
    </div>
  );
}

export default App;
