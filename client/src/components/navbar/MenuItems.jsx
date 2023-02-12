import { useState } from "react";
import Dropdown from './Dropdown';
import { ReactSession } from 'react-client-session';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const MenuItems = ({ items }) => {

  const userRole = ReactSession.get("role");

  const logout = () => {
    console.log('Clicked Logout')
    ReactSession.remove("id");
    ReactSession.remove("role");
    ReactSession.remove("name");
    history.push('/')
    window.location.reload();
  }

  const history = useHistory()
  const [dropdown, setDropdown] = useState(false);

  const menuLogin = < Link to={items.url} >{items.title}</Link> 
  const menuLogout = < Link to={items.url} onClick={logout}>{items.title}</Link> 

  return (
    <li className="menu-items">
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{' '}
          </button>
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
          <button>
            {!userRole && menuLogin}
            {userRole && menuLogout}
          </button>
      )}
    </li>
  );
}

export default MenuItems