import React, { createContext, useState, useEffect } from "react";

export const AppDataContext = createContext();

export const AppDataProvider = ({ children }) => {
  const [selectedButtons, setSelectedButtons] = useState([2, 3]);
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(100);
  const [state, setState] = useState({
    markers: {},
    bedrooms: [],
    minVal,
    maxVal,
  });

  

  
  const handleClick = (index) => {
    if (selectedButtons.includes(index)) {
      setSelectedButtons(selectedButtons.filter((i) => i !== index));
    } else {
      setSelectedButtons([...selectedButtons, index]);
    }
  };
  
  useEffect(() => {
    console.log("selectedButtons ➤", selectedButtons);
    setState((prevState) => ({ ...prevState, bedrooms: selectedButtons }));
  }, [selectedButtons]);

  return (
    <AppDataContext.Provider
      value={{ state, handleClick, setMinVal, setMaxVal, selectedButtons }}
    >
      {children}
    </AppDataContext.Provider>
  );
};
