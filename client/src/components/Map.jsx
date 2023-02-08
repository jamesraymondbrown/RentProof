import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import "./Map.scss";
import Marker from "./Marker.jsx";

export default function MapDisplay(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const properties = props.state.properties;
  const prices = props.state.prices;

  const getBedroomsFromPrices = (property, prices) => {
    let bedrooms = 2;
    for (let price of prices) {
      if (price.property_id === property.id) {
        bedrooms = price.number_of_bedrooms;
        return bedrooms;
      }
    }
    return bedrooms;
  };

  const getBathroomsFromPrices = (property, prices) => {
    let bathrooms = 2;
    for (let price of prices) {
      if (price.property_id === property.id) {
        bathrooms = price.number_of_bathrooms;
        return bathrooms;
      }
    }
    return bathrooms;
  };

  const getCostFromPrices = (property, prices) => {
    let cost = 2000;
    for (let price of prices) {
      if (price.property_id === property.id) {
        cost = price.price;
        return cost;
      }
    }
    return cost;
  };

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
                cost={getCostFromPrices(property, prices)}
                label={getCostFromPrices(property, prices)}
                bedrooms={getBedroomsFromPrices(property, prices)}
                bathrooms={getBathroomsFromPrices(property, prices)}
                //url picture
                // hard coded, Remove this later. we shouldnt need it
              />
            ))
          : console.error("Error: markers property not found in properties")}
      </GoogleMap>
    );
  }

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}
