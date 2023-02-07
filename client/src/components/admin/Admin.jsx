import React, { useEffect } from "react";
import axios from "axios";
import useApplicationData from "../../hooks/useApplicationData";

import PropertyList from "./PropertyList";

const Admin = () => {

   const {
    state,
    setState
  } = useApplicationData();

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
      setState((prev) => ({
        ...prev,
        users: dbUsers,
        properties: dbProperties,
        prices: dbPrices,
      }));
    });
  }, [setState]);

  return (
    <div>
      {state.properties && <PropertyList properties={state.properties} />}
    </div>
  )


}

export default Admin;