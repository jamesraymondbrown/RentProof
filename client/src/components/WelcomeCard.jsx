import { DataBaseContext } from "../providers/DataBaseProvider";
import { Card } from "primereact/card";
import { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import "./WelcomeCard.scss";

const WelcomeCard = () => {
  const { users, properties, prices } = useContext(DataBaseContext);

  return prices === null || properties === null ? (
    <div>loading...</div>
  ) : (
    <Card
      title="Welcome to RentProof!"
      subTitle=""
      className="welcome-card welcome-title"
    >
      <p className="m-0 welcome-card welcome-message">
        Welcome to RentProof! We're currently tracking{" "}
        <strong>{prices.length}</strong> prices across{" "}
        <strong>{properties.length}</strong> different properties.
      </p>
      <p className="m-0 welcome-card welcome-message">
        Do you have info to share that might help your fellow renters?{" "}
        <Link to="/register" className="welcome-link">Create an account</Link> or{" "}
        <Link to="/login" className="welcome-link">login</Link> to get started!
      </p>
    </Card>
  );
};

export default WelcomeCard;
