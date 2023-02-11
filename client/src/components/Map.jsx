import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import "./Map.scss";
import Marker from "./Marker.jsx";
import {
  getBedroomsFromPrices,
  getBathroomsFromPrices,
  getCostFromPrices,
} from "./helpers/getDataFromPrices";

export default function MapDisplay(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const properties = props.state.properties;
  const prices = props.state.prices;
  let markers = [];

  properties &&
    (markers = properties.map((property) => {
      return (
        <Marker
          key={property.id}
          id={property.id}
          position={{
            lat: Number(property.latitude),
            lng: Number(property.longitude),
          }}
          title={property.address}
          cost={getCostFromPrices(property, prices)}
          label={getCostFromPrices(property, prices)}
          bedrooms={getBedroomsFromPrices(property, prices)}
          bathrooms={getBathroomsFromPrices(property, prices)}
        />
      );
    }));

  function Map() {
    return (
      <GoogleMap
        zoom={13}
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
