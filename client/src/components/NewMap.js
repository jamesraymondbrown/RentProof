import { useState, useCallback } from "react";
import { GoogleMapsProvider} from "@ubilabs/google-maps-react-hooks";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import SuperClusterAlgorithm from "../helpers/superClusterAlgorithm";

const mapOptions = {
  zoom: 12,
  center: {
    lat: 43.68,
    lng: -79.43,
  },
};

export default function NewMap() {
  const [mapContainer, setMapContainer] = useState(null);


  return (
    <GoogleMapsProvider
      googleMapsAPIKey={process.env.NEXT_PUBLIC_MAP_API_KEY}
      options={mapOptions}
      mapContainer={mapContainer}
      // onLoad={onLoad}
    >
      <div ref={(node) => setMapContainer(node)} style={{ height: "100vh" }} />
    </GoogleMapsProvider>
  );
}

