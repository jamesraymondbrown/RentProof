import React, { useContext } from "react";
import { DataBaseContext } from "../../providers/DataBaseProvider";
import './Admin.scss'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { ReactSession } from 'react-client-session';
import { useHistory } from "react-router-dom";

import PendingList from "./PendingList";

const Admin = () => {

  const history = useHistory()
  const userRole = ReactSession.get("role");

  if (userRole !== 'admin') {
    history.push('/')
    window.location.reload();
  }

  const { state } = useContext(DataBaseContext);

  return (
    <div className="pending-prices">
      <h2 className="pending-title">Pending Price Submissions</h2>
      <PendingList state={state} />
      <div></div>
    
    </div>
    
  )
}

export default Admin;