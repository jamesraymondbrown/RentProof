import React, { useState } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import "./Map.scss";
import Marker from "./Marker.jsx";

export default function MapDisplay(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });



  function Map() {
    return (
      <GoogleMap
        zoom={13}
        center={{ lat: 49.28, lng: -123.12 }}
        mapContainerClassName="map-container"
      >
        <Marker
          bedrooms={1}
          cost={1000}
          position={{ lat: 49.28, lng: -123.12 }}
          title={"Example Property 1"}
          label={"1"}
          
        />
        <Marker
          bedrooms={2}
          cost={2000}
          position={{ lat: 49.29, lng: -123.13 }}
          title={"Example Property 2"}
          label={"2"}
          
        />
        <Marker
          bedrooms={2}
          cost={2500}
          position={{ lat: 49.27, lng: -123.14 }}
          title={"Example Property 2"}
          label={"2"}
          
        />
      </GoogleMap>
    );
  }

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}
