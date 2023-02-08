import React, { useState, useContext } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api"
import "./Map.scss";
import Marker from "./Marker.jsx";
// import axios from "axios";
import { AppDataContext, AppDataProvider } from "../providers/AppDataProvider";
 
  export default function MapDisplay(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  const properties = props.state.properties

// console.log("properties ➤", properties);
  // const [selectedMarker, setSelectedMarker] = useState(null);

  // function handleMarkerClick(marker) {
  //   setSelectedMarker(marker);
  //   console.log(marker)
  // }

  // const markers = properties.map((property) => {
  //   return (
  //     <Marker
  //       key={property.id}
  //       id={property.id}
  //       position={{ lat: Number(property.latitude), lng: Number(property.longitude) }}
  //       title={property.address}
  //       onClick={handleMarkerClick}
  //     />
  //   )
  // })

  function Map() {
    return (
      <GoogleMap
        zoom={13}
        center={{ lat: 49.28, lng: -123.12 }}
        mapContainerClassName="map-container"
      >
        {properties
          ? Object.values(properties).map((property) => (
              <Marker
                key={property.id}
                id={property.id}
                position={{
                  lat: Number(property.latitude),
                  lng: Number(property.longitude),
                }}
                title={property.address}
                cost={Math.floor(Math.random() * 5000)} // hard coded, change this later
                label={2000} // hard coded, change this later to the same as cost
                bedrooms={Math.floor(Math.random() * 5)} // hard coded, change this later
                bathrooms={Math.floor(Math.random() * (3 - 1 + 1) + 1)} // hard coded, change this later
                //url picture
                // hard coded, Remove this later. we shouldnt need it
              />
            ))
          : console.error(
              "Error: markers property not found in locations object"
            )}
      </GoogleMap>
    );
  }

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}
