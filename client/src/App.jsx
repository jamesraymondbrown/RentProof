import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import useApplicationData from "./hooks/useApplicationData";
import Navbar from "./components/Navbar";
import Map from './components/Map';
import RentList from "./components/RentList";
import Admin from "./components/admin/Admin";
import AddProperty from "./components/AddProperty";
import PropertyDetails from "./components/admin/PropertyDetails";
import { AppDataProvider } from "./providers/AppDataProvider";
import Register from "./components/Register";

function App() {

  const {
    state,
    setState
  } = useApplicationData();

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
            <AppDataProvider>
    <Router>
      <div className="App">
        <Navbar />
        <div className="Content" style={{ display: "flex" }}>
          <Switch>
              <Route exact path="/">
                <Map state={state} style={{ flex: 3 }} />
                <RentList style={{ flex: 1, width: "25%" }} />
              </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/create">
              <AddProperty />
            </Route>
             <Route exact path="/register">
              <Register />
            </Route>
            <Route path="/login">
              {/* <PropertyDetails /> */}
            </Route>
            <Route path="/:propertyid">
              <PropertyDetails />
            </Route>
           
          </Switch>
        </div>
      </div>
    </Router>
            </AppDataProvider>
  );
}

export default App;