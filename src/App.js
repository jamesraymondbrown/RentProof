import React, { useEffect } from "react";
import Map from "./components/Map";
import RentList from "./components/RentList";
import TopBar from "./components/TopBar";
import { useAppData } from "./hooks/useAppData";

function App() {
  const { state, handleClick } = useAppData();
  // console.log("App.js_selectedButtons ➤", state.bedrooms);

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <TopBar />
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <Map selectedButtons={state.bedrooms} handleClick={handleClick} />
        <RentList style={{ width: "30%" }} />
      </div>
    </div>
  );
}

export default App;
