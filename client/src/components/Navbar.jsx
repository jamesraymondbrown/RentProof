import { Link } from "react-router-dom";
import { ReactSession } from 'react-client-session';
import './Navbar.scss'

const Navbar = () => {

  const userRole = ReactSession.get("role");

  const logout = () => {
    console.log('Clicked Logout')
    ReactSession.remove("id");
    ReactSession.remove("role");
    ReactSession.remove("name");
    window.location.reload();
  }

  return (
    <nav className="nav">
      <Link to="/" className="site-title">Rent Tracker</Link>
      <ul>
        {userRole === 'admin' && <li>
          <Link to="/admin" >Admin</Link>
        </li>}
        <li>
          <Link to="/create" >Create</Link>
        </li>
        {!userRole && <li>
          <Link to="/login" >Login</Link>
        </li>}
        {!userRole && <li>
          <Link to="/register" >Register</Link>
        </li>}
        {userRole && <li>
          <Link to="/" onClick={logout}>Logout</Link>
        </li>}
      </ul>
    </nav>  
  );
}
 
export default Navbar;