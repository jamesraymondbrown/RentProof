import { ReactSession } from 'react-client-session';
import './Navbar.scss'
import { menuItems } from './menuItems'
import MenuItems from './MenuItems'


const Navbar = () => {

  const userRole = ReactSession.get("role");

  const loggedOutMenuItems = menuItems.filter(i => i.session === false).map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        });
  const userMenuItems = menuItems.filter(i => i.session === true && i.admin === false).map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        });
  const adminMenuItems = menuItems.filter(i => i.session === true && (i.admin === true || i.admin === false)).map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        });

  return (
    <nav>
      <ul className="menus">        
        {!userRole && loggedOutMenuItems}
        {userRole === 'user' && userMenuItems}
        {userRole === 'admin' && adminMenuItems}
      </ul>
    </nav>
  );
};

export default Navbar;