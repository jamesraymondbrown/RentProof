import { useState, useCallback } from "react";
import { GoogleMapsProvider } from "@ubilabs/google-maps-react-hooks";
import { SuperClusterAlgorithm } from "@googlemaps/markerclusterer";
import "./Map.scss";
import Marker from "./Marker.jsx";
import {
  getBedroomsFromPrices,
  getBathroomsFromPrices,
  getCostFromPrices,
} from "./helpers/getDataFromPrices";

const Map2 = (props) => {
  const [mapContainer, setMapContainer] = useState(null);

  const mapOptions = {
    zoom: 13,
    center: { lat: 49.28, lng: -123.12 },
  };

  return (
    <GoogleMapsProvider
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      options={mapOptions}
      mapContainer={mapContainer}
    >
      <div
        ref={(node) => setMapContainer(node)}
        style={{ height: "100vh" }}
      ></div>
    </GoogleMapsProvider>
  );
};

export default Map2;
