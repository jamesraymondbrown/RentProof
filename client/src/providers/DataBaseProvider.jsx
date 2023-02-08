import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataBaseContext = createContext();

export const DataBaseProvider = ({ children }) => {
  // const [selectedProperty, setSelectedProperty] = useState({
  //   id: 112,
  //   province: "BC",
  //   city: "Vancouver",
  //   street_address: "679 E Cordova St, Vancouver",
  //   latitude: "49.282258500",
  //   longitude: "-123.089670000",
  // });
  const [state, setState] = useState({
    users: null,
    properties: null,
    prices: null,
    currentProperty: {},
  });


  // useEffect(() => {
  //   setState((prevState) => ({
  //     ...prevState,
  //     currentProperty: selectedProperty,
  //   }));
  // }, [selectedProperty]);

  return (
    <DataBaseContext.Provider
      value={{
        // handleClickMarker,
        // setSelectedProperty,
        state,
      }}
    >
      {children}
    </DataBaseContext.Provider>
  );
};
