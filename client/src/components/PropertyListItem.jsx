import React from "react";
import axios from "axios";

const PropertyListItem = (props) => {
  const id = props.id
  const handleClick = () => {
    axios.delete(`http://localhost:8001/properties/${id}`)
      .then((response) => {
        console.log('Property Deleted', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  return (
    <li>      
      <h3>{props.address}, {props.postcode}</h3>
      <h3>{props.province}, {props.city}</h3>
      <button onClick={handleClick}>Delete</button>
    </li>
  );
}

export default PropertyListItem;