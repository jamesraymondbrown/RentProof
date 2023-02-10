import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ReactSession } from 'react-client-session';
import './AddPrice.scss' 
import UploadPhoto from "../UploadPhoto";

const AddPrice = () => {

  const [id, setId] = useState('');
  const [cost, setCost] = useState('');
  const [type, setType] = useState('');
  const [size, setSize] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');

  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = ReactSession.get("id");
    console.log(user)
    
    const price = {
      'property': id,
      'user': user,
      'price': cost,
      'property_type': type,
      'square_footage': size,
      'number_of_bedrooms': bedrooms,
      'number_of_bathrooms': bathrooms
    }

    console.log('Clicked Add Price')

    axios.post('http://localhost:8001/prices', price)
      .then((response) => {
        console.log('New Price Added', response.data);
        history.push('/')
        window.location.reload()
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="wrapper-price">
      <div className="title">
        Update Your Price
      </div>
      <div className="form">
        <div className="price-data">
          <div className="price-data-primary">
            <div className="inputfield">
              <label>Property Id</label>
              <input
                type="text"
                className="input"
                value={id}
                onChange={(event) => setId(event.target.value)}
              />
            </div>
            <div className="inputfield">
              <label>Price</label>
              <input
                type="text"
                className="input"
                value={cost}
                onChange={(event) => setCost(event.target.value)}
              />
            </div>
            <div className="inputfield">
              <label>Property Type</label>
              <input
                type="text"
                className="input"
                required
                value={type}
                onChange={(event) => setType(event.target.value)}
              />
            </div>
          </div>
          <div className="price-data-secondary">
            <div className="inputfield">
              <label>Square Footage</label>
              <input
                type="number"
                className="input"
                min={0}
                required
                value={size}
                onChange={(event) => setSize(event.target.value)}
              />
            </div>
            <div className="inputfield">
              <label>Bedrooms</label>
              <input
                type="number"
                className="input"
                min={0}
                required
                value={bedrooms}
                onChange={(event) => setBedrooms(event.target.value)}
              />
            </div>
            <div className="inputfield">
              <label>Bathrooms</label>
              <input
                type="number"
                className="input"
                min={0}
                required
                value={bathrooms}
                onChange={(event) => setBathrooms(event.target.value)}
              />
            </div>
          </div>
        </div>        
        <div className="inputfield">
          <label>Photo</label>
          <div className="upload">
            <UploadPhoto />
          </div> 
        </div>
        <div className="inputfield">
          <label>Documents</label>
          <div className="upload">
            <UploadPhoto />
          </div> 
        </div>
        <div className="inputfield">
          <input type="submit" value="Submit Price" className="btn" onClick={handleSubmit} />
        </div>
      </div>      
    </div>  
  )
}

export default AddPrice;