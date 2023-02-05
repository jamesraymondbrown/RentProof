import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import Map from './components/Map';
import RentList from "./components/RentList";

function App() {

  const [user, setUser] = useState(null);
  const [property, setProperty] = useState(null);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    axios.get("/users")
      .then((res) => {
        console.log(res.data[0].email)  
        let exampleEmail = res.data[0].email
        setUser(exampleEmail)             
      })
  }, []);

  useEffect(() => {
  axios.get("/properties")
      .then((res) => {
        console.log(res.data)  
        let exampleProperty = res.data[0].postcode
        setProperty(exampleProperty)             
      })
  }, []);

  useEffect(() => {
  axios.get("/prices")
      .then((res) => {
        console.log(res.data)  
        let examplePrice = res.data[0].price
        setPrice(examplePrice)             
      })
  }, []);

  return (
    <div className="App" style={{ display: "flex" }}>
      <Map style={{ flex: 3 }} />
      <RentList style={{ flex: 1, width: "25%" }} />
      <div>
        <p>{!user ? "Cannot access users." : user}</p>
        <p>{!property ? "Cannot access properties." : property}</p>
        <p>{!price ? "Cannot access prices." : price}</p>
      </div>
    </div>
  );
}

export default App;