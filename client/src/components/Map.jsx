import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import "./Map.scss";
// import axios from "axios";

export default function MapDisplay(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  const properties = props.state.properties

  const [selectedMarker, setSelectedMarker] = useState(null);

  function handleMarkerClick(marker) {
    setSelectedMarker(marker);
    console.log(marker)
  }

  const markers = properties.map((property) => {
    return (
      <Marker
        key={property.id}
        id={property.id}
        position={{ lat: Number(property.latitude), lng: Number(property.longitude) }}
        title={property.address}
        onClick={handleMarkerClick}
      />
    )
  })

  function Map() {
    return (
      <GoogleMap
        zoom={12}
        center={{ lat: 49.28, lng: -123.12 }}
        mapContainerClassName="map-container"
      >
        {markers}
      </GoogleMap>
    );
  }

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}
