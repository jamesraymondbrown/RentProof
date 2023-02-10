import React from "react";
import {
  GoogleMap,
  useLoadScript,
  MarkerClusterer,
  MarkerClustererF,
} from "@react-google-maps/api";
import "./Map.scss";
import Marker from "./Marker.jsx";
import {
  getBedroomsFromPrices,
  getBathroomsFromPrices,
  getCostFromPrices,
} from "./helpers/getDataFromPrices";
import { SuperClusterAlgorithm } from "@googlemaps/markerclusterer";

export default function MapDisplay(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const properties = props.state.properties;
  const prices = props.state.prices;

  let markers = () => {};
  // let clusterer = {};

  if (properties) {
    markers = (clusterer) =>
      properties.map((property) => {
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
            clusterer={clusterer}
          />
        );
      });
  }

  // new MarkerClusterer({
  //   markers,
  //   Map,
  //   algorithm: new SuperClusterAlgorithm({ radius: 100 }),
  // });

  function Map() {
    if (properties !== undefined) {
      return (
        <GoogleMap
          zoom={13}
          center={{ lat: 49.28, lng: -123.12 }}
          mapContainerClassName="map-container"
        >
          {props.state.properties?.length > 0 && (
            <MarkerClustererF>
              {(clusterer) => (
                <div>
                  {properties.map((property) => {
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
                        clusterer={clusterer}
                      />
                    );
                  })}
                </div>
              )}
            </MarkerClustererF>
          )}
        </GoogleMap>
      );
    }
  }

  if (!isLoaded || properties === undefined) return <div>Loading...</div>;
  return <Map />;
}
