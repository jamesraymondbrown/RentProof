import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Rent Tracker</h1>
      <div className="links" style={{ margin: '1em' }} >
        <Link to="/" style={{ margin: '1em' }}>Home</Link>
        <Link to="/admin" style={{ margin: '1em' }}>Admin</Link>
        <Link to="/create" style={{ margin: '1em' }}>Add Property</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;