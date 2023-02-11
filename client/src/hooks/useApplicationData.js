import React, { useContext, useState } from "react";
import { DataBaseContext } from "../providers/DataBaseProvider";

const useApplicationData = () => {
  
  const {dataState} = useContext(DataBaseContext)

  const [properties, setProperties] = useState(dataState.properties)

  return {
    properties,
    setProperties,
  };
};

export default useApplicationData;