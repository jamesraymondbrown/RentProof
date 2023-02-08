import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isPending, setIsPending] = useState(false);
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const user = {
      'name': name,
      'email': email,
      'password': password,
    }

    console.log('Clicked Register')
    setIsPending(true)

    axios.post('http://localhost:8001/users/register', user)
      .then((response) => {
        console.log('New User Registered', response.data);
        setTimeout(function(){
          setIsPending(false)
          history.push('/')
        }, 500);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="create">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>        
        <label>Name</label>
          <input
            type="text" 
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        <label>Email</label>
          <input
            type="text" 
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        <label>Password</label>
          <input
            type="text"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        { !isPending && <button>Register</button>}
        { isPending && <button disabled>Registering USer...</button> }
      </form>
    </div>  
  )
}

export default Register;