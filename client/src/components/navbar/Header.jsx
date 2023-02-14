import { useState } from "react";
import Navbar from "./Navbar";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [visible, setVisible] = useState(false);

  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          RentProof
        </Link>
        <Button
          label="Site Info"
          icon="pi pi-external-link"
          onClick={() => setVisible(true)}
        />
        <Dialog
          header="On This Page"
          visible={visible}
          style={{ width: "50vw" }}
          onHide={() => setVisible(false)}
        >
          <p className="m-0">
            Here at Rent Tracker we believe that "The Rent Is Too Damn High!"
            (Praise be to Jimmy McMillan.)
            <br />
            <br />
            That's why we decided to create Rent Tracker, the people-powered app
            that puts information back into the hands of renters and provides
            public accountability against exorbitant rent increases.
            <br />
            <br />
            Look around. You will find statistical averages for rent and rent
            increases in your area, and when you click on a marker you can see
            property-specific rental data too.
          </p>
        </Dialog>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
