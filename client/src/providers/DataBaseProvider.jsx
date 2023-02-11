import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataBaseContext = createContext();

export const DataBaseProvider = (props) => {
  const [users, setUsers] = useState(null);
  const [properties, setProperties] = useState(null);
  const [prices, setPrices] = useState(null);

  useEffect(() => {
    const usersURL = `/users`;
    const propertiesURL = `/properties`;
    const pricesURL = `/prices`;
    Promise.all([
      axios.get(usersURL),
      axios.get(propertiesURL),
      axios.get(pricesURL),
    ]).then((all) => {
      let dbUsers = all[0].data;
      let dbProperties = all[1].data;
      let dbPrices = all[2].data;
      setUsers(dbUsers)
      setProperties(dbProperties)
      setPrices(dbPrices)
    });
  }, []);

  const state = {users, setUsers, properties, setProperties, prices, setPrices}

  return (
    <DataBaseContext.Provider
      value={state}
    >
      {props.children}
    </DataBaseContext.Provider>
  );
};
