import React, { useState } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import "./Map.scss";
import axios from "axios";
import Marker from "./Marker.jsx";

export default function MapDisplay(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  const [selectedMarker, setSelectedMarker] = useState(null);

  function handleMarkerClick(marker) {
    setSelectedMarker(marker);

    // GET request using the fetch method
    const address = `${marker.lat},${marker.lng}`;
    axios.get(`/api/property/${address}`)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }

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
          onClick={() => handleMarkerClick({ lat: 49.28, lng: -123.12 })}
        />
        <Marker
          bedrooms={2}
          cost={2000}
          position={{ lat: 49.29, lng: -123.13 }}
          title={"Example Property 2"}
          label={"2"}
          onClick={() => handleMarkerClick({ lat: 49.29, lng: -123.13 })}
        />
        <Marker
          bedrooms={2}
          cost={2500}
          position={{ lat: 49.27, lng: -123.14 }}
          title={"Example Property 2"}
          label={"2"}
          onClick={() => handleMarkerClick({ lat: 49.29, lng: -123.13 })}
        />
      </GoogleMap>
    );
  }

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}
