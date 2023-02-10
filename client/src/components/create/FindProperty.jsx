import { useState } from "react";
import axios from "axios";
import './CreateProperty.scss'

const FindProperty = () => {

  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [id, setId] = useState('Awaiting Search')

  const handleSubmit = (event) => {
    event.preventDefault();

    const addressForUrl = `${address}, ${city}`
    const propertyURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressForUrl}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}` 
    
    console.log('Clicked Find Property')

    axios.get(propertyURL)
      .then((response) => {
        const latitude = response.data.results[0].geometry.location.lat 
        const longitude = response.data.results[0].geometry.location.lng 
        const property = {
          'province': province,
          'city': city,
          'street_address': address,
          'latitude': latitude,
          'longitude': longitude
        }
        console.log(property)
        axios.post('http://localhost:8001/properties/find', property)
          .then((response) => {
            if (response.data) {
              console.log('Property Found:', response.data);
              setId(response.data.id)
            } else {
              console.log("Property Not Found")
              setId("Property Not Found")
            }
            // window.location.reload()
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });    
  }

  return (
     <div className="wrapper-property">
      <div className="title">
        Find Your Property
      </div>
      <div className="form">
        <div className="inputfield">
          <label>Province</label>
          <div className="custom_select">
            <select
              value={province}
              onChange={(event) => setProvince(event.target.value)}
            >
              <option value="">Select</option>  
              <option value="AB">Alberta</option>
              <option value="BC">British Columbia</option>
              <option value="MB">Manitoba</option>
              <option value="NB">New Brunswick</option>
              <option value="NL">Newfoundland and Labrador</option>
              <option value="NS">Nova Scotia</option>
              <option value="NT">Northwest Territories</option>
              <option value="NU">Nunavut</option>
              <option value="ON">Ontario</option>
              <option value="PE">Prince Edward Island</option>
              <option value="QC">Quebec</option>
              <option value="SK">Saskatchewan</option>
              <option value="YT">Yukon</option>
            </select>
          </div>
        </div>
        <div className="inputfield">
          <label>City</label>
          <input
            type="text"
            className="input"
            required
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
        <div className="inputfield">
          <label>Street Address</label>
          <input
            type="text"
            className="input"
            required
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>
        <div className="inputfield">
          <input type="submit" value="Find Property" className="btn" onClick={handleSubmit} />
        </div>
      </div>
      <div>
        <p>{id}</p>
      </div>
    </div>
  )
}

export default FindProperty;