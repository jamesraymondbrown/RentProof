import React, { useContext } from "react";
import { DataBaseContext } from "../../providers/DataBaseProvider";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import "./Map.scss";
import Marker from "./Marker.jsx";
import {
  getBedroomsFromPrices,
  getBathroomsFromPrices,
  getCostFromPrices
} from "../helpers/getDataFromPrices"

export default function MapDisplay(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const { users, setUsers, properties, setProperties, prices, setPrices } = useContext(DataBaseContext);
 
  let markers = [];

  if (properties && prices) {
    
    const propertiesWithAtLeastOneApprovedPrice = (properties, prices) => {
      return properties
        .filter(property => {
          return prices.some(price => ((price.property_id === property.id) && price.admin_status === "approved"));
        })
        .reverse()
        .map(property => {
          return property;
        });
    }

    const markerProperties = propertiesWithAtLeastOneApprovedPrice(properties, prices)

    markers = markerProperties.map((property) => {
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
    })
  };

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
