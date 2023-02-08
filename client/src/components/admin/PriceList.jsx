import React from "react";
import PriceListItem from "./PriceListItem";

function PriceList(props) {
  const prices = props.prices;
  const PriceList = prices.map((price) => (
    <PriceListItem
      key={price.id}
      id={price.id}
      property={price.property_id}
      status={price.admin_status}
      type={price.property_type}
      size={price.square_footage}
      bedrooms={price.number_of_bedrooms}
      bathrooms={price.number_of_bathrooms}
    />
  ));

  return <ul>{PriceList}</ul>;
}

export default PriceList;