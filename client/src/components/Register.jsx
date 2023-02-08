import { useState } from "react";
import axios from "axios";
import { ReactSession } from 'react-client-session';
import { useHistory } from "react-router-dom";
import './Register.scss'

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
        const userObject = response.data.user
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
    <div className="wrapper">
      <h2 className="title">Register</h2>
      <form className="registration-form" onSubmit={handleSubmit}>        
        <div className="inputfield">
          <label>Name</label>
          <input
            type="text" 
            className="input"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            />
        </div>
        <div className="inputfield">
          <label>Email</label>
          <input
            type="text" 
            className="input"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="inputfield">
          <label>Password</label>
          <input
            type="password"
            className="input"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="inputfield">
          <input type="submit" value="Register" className="btn"/>
        {/* { !isPending && <button>Register</button>}
        {isPending && <button disabled>Registering User...</button>} */}
        </div>   
      </form>
      </div>      
      // <div class="inputfield">
      //   <input type="submit" value="Register" class="btn"/>
      // </div>    
  )
}

export default Register;