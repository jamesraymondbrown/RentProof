import React, { useEffect } from "react";
import axios from "axios";
import { ReactSession } from 'react-client-session';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppDataProvider } from "./providers/AppDataProvider";

import './App.css';
import useApplicationData from "./hooks/useApplicationData";

import Navbar from "./components/Navbar";
import Map from './components/Map';
import RentList from "./components/RentList";
import Admin from "./components/admin/Admin";
import AddProperty from "./components/AddProperty";
import PropertyDetails from "./components/admin/PropertyDetails";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {

  ReactSession.setStoreType("sessionStorage");

  const userId = ReactSession.get("id");
  const userRole = ReactSession.get("role");
  const userName = ReactSession.get("name");
  console.log(userId, userRole, userName)

  const {
    state,
    setState,
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
              <Route exact path="/admin">
                <Admin />
              </Route>
              <Route exact path="/create">
                <AddProperty />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="/login">
                  <Login />
              </Route>
              <Route exact path="/:propertyid">
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