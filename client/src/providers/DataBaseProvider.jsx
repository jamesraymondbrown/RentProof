import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataBaseContext = createContext();

export const DataBaseProvider = ({ children }) => {
  const [selectedProperty, setSelectedProperty] = useState({
    id: 112,
    province: "BC",
    city: "Vancouver",
    street_address: "679 E Cordova St, Vancouver",
    latitude: "49.282258500",
    longitude: "-123.089670000",
  });

  const [dataState, setDataState] = useState({
    currentProperty: {},
    users: null,
    properties: null,
    prices: null,
    currentProperty: {},
  });

  const handleClickMarker = (id) => {
    axios
      .get(`http://localhost:8001/properties/${id}`)
      .then((response) => {
        setSelectedProperty(response.data);
        console.log("response.data ➤", response.data);
      })
      .catch((error) => console.error(error));
  };

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
      setDataState((prev) => ({
        ...prev,
        users: dbUsers,
        properties: dbProperties,
        prices: dbPrices,
      }));
    });
  }, [setDataState]);

  useEffect(() => {
    setDataState((prevState) => ({
      ...prevState,
      currentProperty: selectedProperty,
    }));
  }, [selectedProperty]);

  return (
    <DataBaseContext.Provider
      value={{
        handleClickMarker,
        setSelectedProperty,
        dataState: dataState,
      }}
    >
      {children}
    </DataBaseContext.Provider>
  );
};
