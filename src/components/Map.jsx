import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import "./Map.scss";
import Marker from "./Marker.jsx";
import locations from "./locations";


export default function MapDisplay(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  function Map() {
    console.log(locations)
    console.log(locations.marker);
    return (
      <GoogleMap
        zoom={13}
        center={{ lat: 49.28, lng: -123.12 }}
        mapContainerClassName="map-container"
      >
        {locations.markers
          ? Object.values(locations.markers).map((marker) => (
              <Marker
                key={marker.id}
                bedrooms={marker.bedrooms}
                cost={marker.cost}
                position={marker.position}
                title={marker.title}
                label={marker.label}
              />
            ))
          : console.error(
              "Error: markers property not found in locations object"
            )}
      </GoogleMap>
    );
  }

  if (loadError) {
    console.error(`Error loading Google Maps: ${loadError}`);
    return <div>Error: {loadError}</div>;
  }
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}
