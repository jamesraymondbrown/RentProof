import { useState } from "react";
import axios from "axios";
import { ReactSession } from 'react-client-session';
import { useHistory } from "react-router-dom";

const Login = () => {  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isPending, setIsPending] = useState(false);
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const user = {
      'email': email,
      'password': password,
    }

    console.log('Clicked Login')
    setIsPending(true)

    axios.post('http://localhost:8001/users/login', user)
      .then((response) => {
        const userObject = response.data.user
        console.log('Successful Login ', userObject);
        ReactSession.set("id", userObject.id);
        ReactSession.set("role", userObject.role);
        ReactSession.set("name", userObject.name);
        setTimeout(function(){
          setIsPending(false)          
          history.push('/')
          window.location.reload();
        }, 500);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });    
  }

  return (
    <div className="create">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>        
        <label>Email</label>
          <input
            type="text" 
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        { !isPending && <button>Login</button>}
        { isPending && <button disabled>Logging In...</button> }
      </form>
    </div>  
  )
}

export default Login;