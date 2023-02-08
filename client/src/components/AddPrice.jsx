import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddPrice = () => {

  const [cost, setCost] = useState('');
  const [type, setType] = useState('');
  const [size, setSize] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');

  const [isPending, setIsPending] = useState(false);
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const price = {
      'price': cost,
      'property_type': type,
      'square_footage': size,
      'number_of_bedrooms': bedrooms,
      'number_of_bathrooms': bathrooms
    }

    console.log('Clicked Add Price')
    setIsPending(true)

    axios.post('http://localhost:8001/prices', price)
      .then((response) => {
        console.log('New Price Added', response.data);
        setTimeout(function(){
          setIsPending(false)
          history.push('/admin')
        }, 500);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="create">
      <h2>Add Price</h2>
      <form onSubmit={handleSubmit}>
        <label>Price</label>
          <input
            type="text" 
            required
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
        <label>Property Type</label>
          <input
            type="text" 
            required
            value={type}
            onChange={(event) => setType(event.target.value)}
          />
        <label>Square Footage</label>
          <input
            type="number" 
            required
            value={size}
            onChange={(event) => setSize(event.target.value)}
          />
        <label>Bedrooms</label>
          <input
            type="number" 
            required
            value={bedrooms}
            onChange={(event) => setBedrooms(event.target.value)}
          />
          <label>Bathrooms</label>
          <input
            type="number" 
            required
            value={bathrooms}
            onChange={(event) => setBathrooms(event.target.value)}
          />
        { !isPending && <button>Add Property</button>}
        { isPending && <button disabled>Adding Property...</button> }
      </form>
    </div>  
  )
}

export default AddPrice;