import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import "./Map.scss";

export default function Map(props) {

  const { isLoaded } = useLoadScript({googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY})

  function Map() {
    return <GoogleMap zoom={13} center={{lat: 49.28, lng: -123.12}} mapContainerClassName="map-container"></GoogleMap>
  }


  if (!isLoaded) return <div>Loading...</div>
  return (
    
    <Map />
  );
}
