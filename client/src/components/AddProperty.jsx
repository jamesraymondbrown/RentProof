import { useState } from "react";
import axios from "axios";

const AddProperty = () => {

  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [postcode, setPostcode] = useState('');

  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const property = {
      'province': province,
      'city': city,
      'street_address': address,
      'postcode': postcode
    }

    console.log('Clicked Add Property')
    setIsPending(true)

    axios.post('http://localhost:8001/properties', property)
      .then((response) => {
        console.log('New Property Added', response.data);
        setTimeout(function(){
 	        setIsPending(false)
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="create">
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>
        <label>Province</label>
          <select
            value={province}
            onChange={(event) => setProvince(event.target.value)}
          >
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
        <label>City</label>
          <input
            type="text" 
            required
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        <label>Street Address</label>
          <input
            type="text" 
            required
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        <label>Postcode</label>
          <input
            type="text" 
            required
            value={postcode}
            onChange={(event) => setPostcode(event.target.value)}
            />
        { !isPending && <button>Add Property</button>}
        { isPending && <button disabled>Adding Property...</button> }
      </form>
    </div>  
  )
}

export default AddProperty;