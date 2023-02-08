import { Link } from "react-router-dom";
import { ReactSession } from 'react-client-session';
import './Navbar.scss'

const Navbar = () => {

  const name = ReactSession.get("name");
  const userRole = ReactSession.get("role");

  const logout = () => {
    console.log('Clicked Logout')
    ReactSession.remove("id");
    ReactSession.remove("role");
    ReactSession.remove("name");
    window.location.reload();
  }

  return (
    <nav className="navbar">
      <h1>Rent Tracker</h1>
      <div className="links" style={{ margin: '1em' }} >
        <Link to="/" style={{ margin: '1em' }}>Home</Link>        
        { userRole === 'admin' && <Link to="/admin" style={{ margin: '1em' }}>Admin</Link> }
        <Link to="/create" style={{ margin: '1em' }}>Create</Link>
        { !name && <Link to="/login" style={{ margin: '1em' }}>Login</Link> }
        { !name && <Link to="/register" style={{ margin: '1em' }}>Register</Link> }        
        { name && <button className="logout" onClick={logout}>Logout</button> }
      </div>
    </nav>
  );
}
 
export default Navbar;