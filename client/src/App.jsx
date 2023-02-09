import React from "react";
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

function App() {
  ReactSession.setStoreType("sessionStorage");
  const userId = ReactSession.get("id");
  const userRole = ReactSession.get("role");
  const userName = ReactSession.get("name");
  console.log(userId, userRole, userName);

  return (
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
