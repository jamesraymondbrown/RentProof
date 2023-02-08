import { useContext, useEffect } from "react";
import { Marker as GoogleMapMarker } from "@react-google-maps/api";
import axios from "axios";
import { AppDataContext, AppDataProvider } from "../providers/AppDataProvider";

function Marker({ bedrooms, bathrooms, cost, position, title, label, id}) {
  const { selectedBedrooms, selectedBathrooms } = useContext(AppDataContext);
  
  useEffect(() => {
  }, [selectedBedrooms]);

  let markerColor;

  if (cost <= 1500) {
    markerColor = "blue";
  } else if (cost <= 2000) {
    markerColor = "green";
  } else {
    markerColor = "red";
  }

  const handleMarkerClick = () => {
    axios
      .get(`http://localhost:8001/properties/${id}`)
      .then((response) => console.log("response.data ➤", response.data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      {selectedBedrooms.includes(bedrooms) &&
      selectedBathrooms.includes(bathrooms) ? (
        <GoogleMapMarker
          position={position}
          title={title}
          onClick={handleMarkerClick}
          icon={{
            url: `http://maps.google.com/mapfiles/ms/icons/${markerColor}-dot.png`,
          }}
        />
      ) : null}
    </div>
  );
}

export default Marker;
