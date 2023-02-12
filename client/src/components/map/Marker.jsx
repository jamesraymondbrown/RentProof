import React, { useContext } from "react";
import { Marker as GoogleMapMarker } from "@react-google-maps/api";
import { MarkerFilterContext } from "../../providers/MarkerFilterProvider";

function Marker({
  bedrooms,
  bathrooms,
  cost,
  position,
  title,
  label,
  id,
  
}) {
  const { selectedBedrooms, selectedBathrooms, handleClickMarker, minF, maxF, state } =
    useContext(MarkerFilterContext);

  let markerColor;

  if (cost <= 1500) {
    markerColor = "blue";
  } else if (cost <= 2000) {
    markerColor = "green";
  } else {
    markerColor = "red";
  }
  // if (selectedProperty){console.log("hi");}
// console.log("selectedPropertyold ➤", state.prevProperty.id);
// if(state.currentProperty.id === id){1}
// if(state.prevProperty.id === id){null}
// else{2}
return (
  <div>
    {(selectedBedrooms.includes(bedrooms) || !selectedBedrooms.length) &&
    (selectedBathrooms.includes(bathrooms) || !selectedBathrooms.length) &&
    cost < maxF &&
    cost > minF ? (
      <GoogleMapMarker
        position={position}
        title={title}
        onClick={() => handleClickMarker(id)}
        icon={{
          url: `http://maps.google.com/mapfiles/ms/icons/${markerColor}-dot.png`,
        }}
        animation={(() => {
          if (state.currentProperty.id === id) {
            return 1;
          }
          if (state.prevProperty.id === id) {
            // console.log("3 ➤");
            return null;
          }
          return 2;
        })()}
      />
    ) : null}
  </div>
);
}

export default React.memo(Marker);
