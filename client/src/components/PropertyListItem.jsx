import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const PropertyListItem = (props) => {
  const id = props.id
  const history = useHistory()
  const handleClick = () => {  
    history.push(`/${id}`)
  }  
  return (
    <li>      
      <h3>{props.address}, {props.postcode}</h3>
      <h3>{props.province}, {props.city}</h3>
      <button onClick={handleClick}>Manage Property</button>
    </li>
  );
}

export default PropertyListItem;