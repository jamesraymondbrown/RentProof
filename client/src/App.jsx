import React, { useEffect } from "react";
import axios from "axios";
import { ReactSession } from "react-client-session";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddPrice from "./components/AddPrice";
import AddProperty from "./components/AddProperty";
import Admin from "./components/admin/Admin";
import Login from "./components/Login";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import PriceDetails from "./components/admin/PriceDetails";
import PropertyDetails from "./components/admin/PropertyDetails";
import Register from "./components/Register";
import RentList from "./components/RentList";
import useApplicationData from "./hooks/useApplicationData";
import Map2 from "./components/map2";

function App() {
  ReactSession.setStoreType("sessionStorage");
  const userId = ReactSession.get("id");
  const userRole = ReactSession.get("role");
  const userName = ReactSession.get("name");
  console.log(userId, userRole, userName);

  const { state, setState } = useApplicationData();

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
        <div className="Content">
          <Switch>
            <Route exact path="/">
              <Map state={state} />
              <RentList />
            </Route>
            <Route exact path="/admin">
              <Admin />
            </Route>
            <Route exact path="/create">
              <AddProperty />
              <AddPrice />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/properties/:propertyid">
              <PropertyDetails />
            </Route>
            <Route exact path="/prices/:priceid">
              <PriceDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
