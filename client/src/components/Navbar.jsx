import { Link } from "react-router-dom";
import { ReactSession } from 'react-client-session';

const Navbar = () => {

  const logout = () => {
    console.log('Clicked Logout')
    ReactSession.remove("id");
    ReactSession.remove("role");
    ReactSession.remove("name");
  }

  return (
    <nav className="navbar">
      <h1>Rent Tracker</h1>
      <div className="links" style={{ margin: '1em' }} >
        <Link to="/" style={{ margin: '1em' }}>Home</Link>
        <Link to="/admin" style={{ margin: '1em' }}>Admin</Link>
        <Link to="/create" style={{ margin: '1em' }}>Add Property</Link>
        <Link to="/register" style={{ margin: '1em' }}>Register</Link>
        <Link to="/login" style={{ margin: '1em' }}>Login</Link>
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}
 
export default Navbar;