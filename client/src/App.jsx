import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Map from './components/Map';
import RentList from "./components/RentList";
import AddProperty from "./components/AddProperty";
import PropertyList from "./components/PropertyList";

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
    <Router>  
      <div className="App">
        <Navbar />
        <div className="Content" style={{ display: "flex" }}>
          <Switch>
            <Route exact path="/">
              <Map style={{ flex: 3 }} />  
              <RentList style={{ flex: 1, width: "25%" }} />
            </Route>
            <Route path="/admin">
              <AddProperty />
              {state.properties && <PropertyList properties={state.properties} />}
            </Route>            
          </Switch>
        </div>   
      </div>
    </Router>
  );
}

export default App;