import React, { useContext, useEffect} from "react";
import { Marker as GoogleMapMarker } from "@react-google-maps/api";
import axios from "axios";
import { MarkerFilterContext } from "../providers/MarkerFilterProvider";

function Marker({ bedrooms, bathrooms, cost, position, title, label, id }) {
  const {
    selectedBedrooms,
    selectedBathrooms,
    setSelectedProperty,
    handleClickMarker,
  } = useContext(MarkerFilterContext);

  let markerColor;

  if (cost <= 1500) {
    markerColor = "blue";
  } else if (cost <= 2000) {
    markerColor = "green";
  } else {
    markerColor = "red";
  }

  return (
    <div>
      {(selectedBedrooms.includes(bedrooms) || !selectedBedrooms.length) &&
      (selectedBathrooms.includes(bathrooms) || !selectedBathrooms.length) ? (
        <GoogleMapMarker
          position={position}
          title={title}
          
          onClick={() => handleClickMarker(id)}
          icon={{
            url: `http://maps.google.com/mapfiles/ms/icons/${markerColor}-dot.png`,
          }}
        />
      ) : null}
    </div>
  );
}

export default React.memo(Marker);
