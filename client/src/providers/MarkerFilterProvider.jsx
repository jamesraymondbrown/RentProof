import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const MarkerFilterContext = createContext();

export const MarkerFilterProvider = ({ children }) => {
  const [selectedBedrooms, setSelectedBedrooms] = useState([]);
  const [selectedBathrooms, setSelectedBathrooms] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState({
    id: 114,
    province: "BC",
    city: "Vancouver",
    street_address: "679 E Cordova St, Vancouver",
    latitude: "49.282258500",
    longitude: "-123.089670000",
  });
  const [minF, setMinF] = useState(1);
  const [maxF, setMaxF] = useState(5000);
  const [state, setState] = useState({
    markers: {},
    bedrooms: [],
    bathrooms: [],
    currentProperty: {},
    prevProperty: [],
  });

// console.log("state.currentProperty ➤", state.currentProperty.id);

  const handleClickBeds = (index) => {
    if (selectedBedrooms.includes(index)) {
      setSelectedBedrooms(selectedBedrooms.filter((i) => i !== index));
    } else {
      setSelectedBedrooms([...selectedBedrooms, index]);
    }
  };
  const handleClickBaths = (index) => {
    if (selectedBathrooms.includes(index)) {
      setSelectedBathrooms(selectedBathrooms.filter((i) => i !== index));
    } else {
      setSelectedBathrooms([...selectedBathrooms, index]);
    }
  };

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
  setState((prevState) => {
    if (!state.currentProperty.id) {
      return prevState;
    }

    return {
      ...prevState,
      prevProperty: [...prevState.prevProperty, state.currentProperty.id],
    };
  });

  setState((prevState) => ({
    ...prevState,
    currentProperty: selectedProperty,
  }));
}, [selectedProperty]);


  useEffect(() => {
    setState((prevState) => ({ ...prevState, bedrooms: selectedBedrooms }));
  }, [selectedBedrooms]);

  useEffect(() => {
    setState((prevState) => ({ ...prevState, bathrooms: selectedBathrooms }));
  }, [selectedBathrooms]);

  return (
    <MarkerFilterContext.Provider
      value={{
        state,
        handleClickBeds,
        handleClickBaths,
        handleClickMarker,
        setMinF,
        setMaxF,
        minF,
        maxF,
        selectedBathrooms,
        selectedBedrooms,
        setSelectedProperty,
      }}
    >
      {children}
    </MarkerFilterContext.Provider>
  );
};
