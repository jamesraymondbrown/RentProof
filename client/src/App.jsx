import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import Map from './components/Map';
import RentList from "./components/RentList";

function App() {

  const [state, setState] = useState({
    users: null,
    properties: null,
    prices: null,
  });

  useEffect(() => {
    const usersURL = `http://localhost:8001/users`;
    const propertiesURL = `http://localhost:8001/properties`;
    const pricesURL = `http://localhost:8001/prices`;
    Promise.all([
      axios.get(usersURL),
      axios.get(propertiesURL),
      axios.get(pricesURL),
    ]).then((all) => {
      let dbUsers = all[0].data;
      let dbProperties = all[1].data;
      let dbPrices = all[2].data;
      setState((prev) => ({
        ...prev,
        users: dbUsers,
        properties: dbProperties,
        prices: dbPrices,
      }));
    });
  }, [setState]);

  return (
    <div className="App" style={{ display: "flex" }}>
      <Map style={{ flex: 3 }} />
      <RentList style={{ flex: 1, width: "25%" }} />
      <div>
        <p>{!state.users ? "Cannot access users." : `Welcome, ${state.users[Math.floor(Math.random() * 3)].email}`}</p>
        <p>{!state.properties ? "Cannot access properties." : `Here's a postcode from the database: ${state.properties[Math.floor(Math.random() * 10)].postcode}`}</p>
        <p>{!state.prices ? "Cannot access prices." : `Here's the only price currently in the database: ${state.prices[0].price}`}</p>
      </div>
    </div>
  );
}

export default App;