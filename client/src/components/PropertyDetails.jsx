import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const PropertyDetails = () => {

  const id = useParams().propertyid
  const [property, setProperty] = useState(null)
  const history = useHistory()

  useEffect(() => {
  axios.get(`http://localhost:8000/properties/${id}`)
    .then((response) => {
      setProperty(response.data)
    })
  }, [setProperty]);

  const handleClick = () => {
    axios.delete(`http://localhost:8001/properties/${id}`)
      .then((response) => {
        console.log('Property Deleted', response.data);
        history.push('/admin')
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  return (    
    <li>
      {property && (
        <div>
          <h3>{property.street_address}, {property.postcode}</h3>
          <h3>{property.province}, {property.city}</h3>
          <button onClick={handleClick}>Delete</button>
        </div>  
      )}
    </li>    
  );
}

export default PropertyDetails;