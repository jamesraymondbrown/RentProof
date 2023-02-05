import "./App.css";
import Map from "./components/Map.jsx";
import RentList from "./components/RentList";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <TopBar />
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <Map />
        <RentList style={{ width: "30%" }} />
      </div>
    </div>
  );
}

export default App;
