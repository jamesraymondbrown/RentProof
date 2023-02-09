// This got replaced by state, setState in the AppDataProvider.jsx file. So I think it could be deleted?

import { useState } from "react";

const useApplicationData = () => {
  const [state, setState] = useState({
    users: null,
    properties: null,
    prices: null,
  });

  return {
    state,
    setState,
  };
};

export default useApplicationData;