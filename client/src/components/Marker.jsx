import { useContext, useEffect } from "react";
import { Marker as GoogleMapMarker } from "@react-google-maps/api";
import axios from "axios";
import { AppDataContext, AppDataProvider } from "../providers/AppDataProvider";

function Marker({ bedrooms, cost, position, title, label, id}) {
  const { selectedButtons } = useContext(AppDataContext);
  
  useEffect(() => {
    console.log("selectedButtons ➤", selectedButtons);
  }, [selectedButtons]);

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
      {selectedButtons.includes(bedrooms) ? (
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
