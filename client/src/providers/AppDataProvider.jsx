import React, { createContext, useState, useEffect } from "react";

export const AppDataContext = createContext();

export const AppDataProvider = ({ children }) => {
  const [selectedBedrooms, setSelectedBedrooms] = useState([2, 3]);
  const [selectedBathrooms, setSelectedBathrooms] = useState([2, 3]);
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(100);
  const [state, setState] = useState({
    markers: {},
    bedrooms: [],
    bathrooms: [],
    minVal,
    maxVal,
  });
  
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
  
  useEffect(() => {
    setState((prevState) => ({ ...prevState, bedrooms: selectedBedrooms }));
  }, [selectedBedrooms]);
  useEffect(() => {
    setState((prevState) => ({ ...prevState, bathrooms: selectedBathrooms }));
  }, [selectedBathrooms]);
  return (
    <AppDataContext.Provider
      value={{
        state,
        handleClickBeds,
        handleClickBaths,
        setMinVal,
        setMaxVal,
        selectedBathrooms,
        selectedBedrooms,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};
