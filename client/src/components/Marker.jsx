import React from "react";
import { Marker as GoogleMapMarker } from "@react-google-maps/api";
import axios from "axios";

function Marker({selectedButtons, bedrooms, cost, position, title, label, id }) {
  let markerColor;
  // console.log("selectedButtons.length ➤", selectedButtons.length);
  // if (selectedButtons.length) {
  //   markerColor = "yellow";
  // } 
  if (cost <= 1500) {
    markerColor = "blue";
  } else if (cost <= 2000) {
    markerColor = "green";
  } else {
    markerColor = "red";
  }

  const handleMarkerClick = () => {
    axios
      .get(`http://localhost:8001/properties/${id}`)
      .then((response) => console.log("response.data ➤", response.data))
      // .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      {selectedButtons.includes(bedrooms) ? (
        <GoogleMapMarker
          position={position}
          title={title}
          // label={label}
          onClick={handleMarkerClick}
          icon={{
            url: `http://maps.google.com/mapfiles/ms/icons/${markerColor}-dot.png`,
          }}
        />
      ) : null}
    </div>
  );
}

export default Marker;
