import logo from './logo.svg';
import './App.css';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

function App() {

  const { isLoaded } = useLoadScript({googleMapsApiKey: "process.env.GOOGLE_API_KEY"})

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Map
        </p>
        <GoogleMap zoom={10} center={{}} mapContainerClassName="map-container"></GoogleMap>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
