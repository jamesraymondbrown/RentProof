import React from "react";
import { useHistory } from "react-router-dom";

const PriceListItem = (props) => {

  const id = props.id
  const history = useHistory()
  const handleClick = () => {    
    history.push(`/prices/${id}`)
  }  
  return (
    <li>      
      <h3>{props.property}, {props.status}</h3>
      <h3>{props.price}</h3>
      <h3>{props.type}, {props.size}</h3>
      <h3>{props.bedrooms},{props.bathrooms }</h3>
      <button onClick={handleClick}>Manage Price</button>
    </li>
  );
}

export default PriceListItem;