import React, { useContext } from "react";
import { DataBaseContext } from "../../providers/DataBaseProvider";
import './Admin.scss'
import { ReactSession } from 'react-client-session';
import { useHistory } from "react-router-dom";

import SubmissionList from "./SubmissionList";

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
        <SubmissionList state={state} />
    </div>    
  )
}

export default Admin;