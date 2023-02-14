import { DataBaseContext } from "../providers/DataBaseProvider";
import { Card } from "primereact/card";
import { useContext } from "react";
import "./WelcomeCard.scss";

const WelcomeCard = () => {
  const { users, properties, prices } = useContext(DataBaseContext);

  return prices === null || properties === null ? (
    <div>loading...</div>
  ) : (
    <Card title="Welcome to Rentproof!" className="welcome-card welcome-title">
      <p className="m-0 welcome-card welcome-message">
        Welcome to RentProof! We're currently tracking {prices.length} prices
        across {properties.length} different properties. Do you have info to
        share that might help your fellow renters?{" "}
        <a href="http://localhost:8000/register">Create an account</a> or{" "}
        <a href="http://localhost:8000/login">login</a> to get started!
      </p>
    </Card>
  );
};

export default WelcomeCard;
