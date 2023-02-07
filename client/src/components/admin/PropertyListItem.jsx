import React from "react";
import { useHistory } from "react-router-dom";

const PropertyListItem = (props) => {

  const id = props.id
  const history = useHistory()
  const handleClick = () => {    
    history.push(`/${id}`)
  }  
  return (
    <li>      
      <h3>{props.address}</h3>
      <h3>{props.province}, {props.city}</h3>
      <h3>{props.latitude},{props.longitude }</h3>
      <button onClick={handleClick}>Manage Property</button>
    </li>
  );
}

export default PropertyListItem;