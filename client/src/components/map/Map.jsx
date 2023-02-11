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
 
  // This is a quickly made up test to check if a property has at least one 
  // price attached to it.
  
  // We ultimately need a function that will verify whether a property
  // has at least one APPROVED price before displaying it on the map.

  // let propertiesWithPrices = []
  // if (properties && prices) {
    
  //   for (let price of prices) {
  //     for (let property of properties) {
  //       if (price.property_id === property.id) {
  //         if (!propertiesWithPrices.includes(property)) {
  //           propertiesWithPrices.push(property)
          
  //         }
  //       }
  //     }
  //   }
  // }
  // console.log(propertiesWithPrices)

  let markers = [];

  if (properties && prices) {
    // Could replace properties.map with propertiesWithPrices.map
    markers = properties.map((property) => {
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
