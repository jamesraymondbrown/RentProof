import { useState } from 'react';
import Navbar from './Navbar';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Link } from "react-router-dom";

const Header = () => {

  const [visible, setVisible] = useState(false);

  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          Rent Tracker
        </Link>
        <Button label="Welcome!" icon="pi pi-external-link" onClick={() => setVisible(true)} />
        <Dialog header="What We Do ..." visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
          <p className="m-0">
            Rent Tracker is a people-powered app that puts information into the hands of renters and provides public accountability
            against exorbitant rent increases.
            
            <br /><br />Here, you can find statistical averages for your area and property-specific data when you click
            on a property on the map.
          </p>
        </Dialog>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;