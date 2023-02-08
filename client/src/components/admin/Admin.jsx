import React, { useEffect } from "react";
import axios from "axios";
import './Admin.scss'
import { ReactSession } from 'react-client-session';
import { useHistory } from "react-router-dom";
import useApplicationData from "../../hooks/useApplicationData";

import PropertyList from "./PropertyList";
import PriceList from "./PriceList";

const Admin = () => {

  const history = useHistory()
  const userRole = ReactSession.get("role");

  if (userRole !== 'admin') {
    history.push('/')
    window.location.reload();
  }

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
    <div className="admin">
      <div>
        {state.properties && <PropertyList properties={state.properties} />}
      </div>
      <div>
        {state.prices && <PriceList prices={state.prices} />}    
        </div>
    </div>
  )


}

export default Admin;