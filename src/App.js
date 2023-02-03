import logo from './logo.svg';
import './App.css';
import Map from './components/Map.jsx';
import RentList from "./components/RentList";

function App() {

  return (
    <div className="App" style={{ display: "flex" }}>
      <Map style={{ flex: 3 }} />
      <RentList style={{ flex: 1, width: "25%" }} />
    </div>
  );
}

export default App;
