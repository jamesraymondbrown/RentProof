import { DataBaseContext } from "../providers/DataBaseProvider";
import { Card } from "primereact/card";
import { useContext } from "react";
import "./WelcomeCard.scss";

const WelcomeCard = () => {
  const { users, properties, prices } = useContext(DataBaseContext);

  return prices === null || properties === null ? (
    <div>loading...</div>
  ) : (
    <Card
      title="Welcome to Rentproof!"
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
        <a href="http://localhost:8000/register">Create an account</a> or{" "}
        <a href="http://localhost:8000/login">login</a> to get started!
      </p>
    </Card>
  );
};

export default WelcomeCard;
