import { useState } from "react";

const useApplicationData = () => {

  const [state, setState] = useState({
    users: null,
    properties: null,
    prices: null,
  }); 

  return {
    state,
    setState
  };
};

export default useApplicationData;
