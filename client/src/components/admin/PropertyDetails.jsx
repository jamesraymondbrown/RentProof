import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const PropertyDetails = () => {

  const id = useParams().propertyid
  const [property, setProperty] = useState(null)
  const [isPending, setIsPending] = useState(false);
  const history = useHistory()

  useEffect(() => {
  axios.get(`http://localhost:8000/properties/${id}`)
    .then((response) => {
      setProperty(response.data)
    })
  }, []);

  const handleClick = () => {
    console.log("Clicked Delete")
    setIsPending(true)
    axios.delete(`http://localhost:8001/properties/${id}`)
      .then((response) => {
        console.log('Property Deleted', response.data);
        setTimeout(function () {
          setIsPending(false)
 	        history.push('/admin')
        }, 500);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  return (    
    <li>
      {property && (
        <div>
          <h3>{property.street_address}</h3>          
          <h3>{property.province}, {property.city}</h3>
          <h3>{property.latitude},{property.longitude }</h3>
          { !isPending && <button onClick={handleClick}>Delete</button> }
          { isPending && <button disabled>Deleting Property...</button> }
        </div>  
      )}
    </li>    
  );
}

export default PropertyDetails;