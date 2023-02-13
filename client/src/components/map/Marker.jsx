import React, { useState, useContext, lazy, Suspense } from "react";
import { MarkerFilterContext } from "../../providers/MarkerFilterProvider";
const GoogleMapMarker = lazy(() =>
  import("@react-google-maps/api").then((module) => ({
    default: module.Marker,
  }))
);

function Marker({ bedrooms, bathrooms, cost, position, title, label, id }) {
  const [isHovered, setIsHovered] = useState(false);
  const {
    selectedBedrooms,
    selectedBathrooms,
    handleClickMarker,
    minF,
    maxF,
    state,
  } = useContext(MarkerFilterContext);

function percentageToHexColor(percentage, lightness = 0, saturation = 100) {
  let R, G, B;
  percentage -= 60;

  R = Math.round(percentage * 2 + lightness + (100 - saturation));
  G = Math.round(150 + lightness - percentage * 2.5 + (100 - saturation));
  B =
    150 + lightness - percentage * 2.5 >= 255
      ? (150 + lightness - percentage * 2.5 - 255) * 4
      : 0 + (100 - saturation);

  R = R > 255 ? 255 : R < 0 ? 0 : R;
  G = G > 255 ? 255 : G < 0 ? 0 : G;
  B = B > 255 ? 255 : B < 0 ? 0 : B;

  R = R.toString(16).padStart(2, "0");
  G = G.toString(16).padStart(2, "0");
  B = B.toString(16).padStart(2, "0");

  return "#" + R + G + B;
}

// console.log("state.prevProperty ➤", state.prevProperty);
  const isGray = state.prevProperty.includes(id);
  const costVSavg = cost / 25;
  const saturation = state.prevProperty.includes(id) ? 0 : 100;
  const markerColor = percentageToHexColor(costVSavg, 120);

function pinSymbol(color, isGray, isHovered) {
  return {
    path: "M23.667 11.84c0 7.52-10.048 19.52-11.5 19.52s-11.5-12-11.5-19.52C.667 5.743 5.816.8 12.167.8c6.35 0 11.5 4.943 11.5 11.04",
    fillColor: color,
    fillOpacity: isGray ? 0.7 : 1,
    strokeColor: isGray ? "#808080" : "#000",
    strokeWeight: isHovered ? 3 : 2,
    scale: 1,
  };
}


 return (
   <div>
     {(selectedBedrooms.includes(bedrooms) || !selectedBedrooms.length) &&
     (selectedBathrooms.includes(bathrooms) || !selectedBathrooms.length) &&
     cost < maxF &&
     cost > minF ? (
       <Suspense fallback={<div>Loading...</div>}>
         <GoogleMapMarker
           position={position}
           title={title}
           onClick={() => handleClickMarker(id)}
           icon={pinSymbol(markerColor, isGray, isHovered)}
           onMouseOver={() => {
             setIsHovered(true);
           }}
           onMouseOut={() => {
             setIsHovered(false);
           }}
           animation={(() => {
             if (state.currentProperty.id === id) {
               return 1;
             }
             if (state.prevProperty.includes(id)) {
               return null;
             }
             return 2;
           })()}
         />
       </Suspense>
     ) : null}
   </div>
 );

}

export default React.memo(Marker);
