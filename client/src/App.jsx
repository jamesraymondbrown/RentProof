import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import Map from './components/Map';
import RentList from "./components/RentList";

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {

    axios.get("/api")
      .then((res) => {
        console.log(res.data.message)  
        let serverMessage = res.data.message
        setData(serverMessage)             
      })
  }, []);

  return (
    <div className="App" style={{ display: "flex" }}>
      <Map style={{ flex: 3 }} />
      <RentList style={{ flex: 1, width: "25%" }} />
      <p>{!data ? "Database not connected" : data}</p>
    </div>
  );
}

export default App;
