import React from "react";
import { Marker as GoogleMapMarker } from "@react-google-maps/api";
import axios from "axios";

function Marker({selectedButtons, bedrooms, cost, position, title, label }) {
  let markerColor;
  if (cost <= 1500) {
    markerColor = "blue";
  } else if (cost <= 2000) {
    markerColor = "green";
  } else {
    markerColor = "red";
  }

  const handleMarkerClick = () => {
    const address = `${position.lat},${position.lng}`;
    axios
      .get(`/api/property/${address}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <GoogleMapMarker
      position={position}
      title={title}
      label={label}
      onClick={handleMarkerClick}
      icon={{
        url: `http://maps.google.com/mapfiles/ms/icons/${markerColor}-dot.png`,
      }}
    /> 
  );
}

export default Marker;
