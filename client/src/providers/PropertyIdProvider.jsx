import { createContext, useState } from "react";

export const PropertyIdContext = createContext();

export const PropertyIdProvider = (props) => {

  const [updateId, setUpdateId] = useState('');
  const state = {updateId, setUpdateId}  
  
  return (
    <PropertyIdContext.Provider value={state}>
      {props.children}
    </PropertyIdContext.Provider>
  )
}