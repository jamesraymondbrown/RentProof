import React from "react";
import PropertyListItem from "./PropertyListItem";

function PropertyList(props) {
  const properties = props.properties;
  const PropertyList = properties.map((property) => (
    <PropertyListItem
      key={property.id}
      id={property.id}
      province={property.province}
      city={property.city}
      address={property.street_address}
      postcode={property.postcode}
    />
  ));

  return <ul>{PropertyList}</ul>;
}

export default PropertyList;