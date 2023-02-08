import "./RentList.scss";
import React from "react";
import MultiRangeSlider from "./multiRangeSlider/MultiRangeSlider";
import BedFilter from "./BedFilter";
import BathFilter from "./BathFilter";
import { useContext } from "react";
import { MarkerFilterContext } from "../providers/MarkerFilterProvider";

const RentList = () => {
  const { state } = useContext(MarkerFilterContext);

  // console.log("prices", state.prices);

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

  const getPhotoFromPrices = (property, prices) => {
    let photo = "";
    for (let price of prices) {
      if (price.property_id === property.id) {
        // console.log(price.photo);
        photo = price.photo;
        return photo;
      }
    }
    return photo;
  };

  const getCostFromPrices = (property, prices) => {
    let cost = 2000;
    for (let price of prices) {
      // console.log("price");
      if (price.property_id === property.id) {
        cost = price.price;
        return cost;
      }
    }
    return cost;
  };

  return (
    <div className="RentList">
      <div className="slider-container">
        <MultiRangeSlider
          min={0}
          max={5000}
          onChange={({ min, max }) =>
            console
              .log //`min = ${min}, max = ${max}`
              ()
          }
          style={{ height: "20px" }}
        />

        <BedFilter />

        <BathFilter />
      </div>
      <img
        src={
          state.prices
            ? getPhotoFromPrices(state.currentProperty, state.prices)
            : "https://s3.amazonaws.com/lws_lift/cressey/images/gallery/768/1405699411_201407_Cressey_VictoriaDr_H4_0004.jpg"
        }
        alt="Rent List"
        className="picture"
        style={{ width: "100%" }}
      />

      <table>
        <thead>
          <tr>
            <th>Property Name</th>
            <th>Location</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{state.currentProperty.street_address}</td>
            <td>{state.currentProperty.street_address}</td>
            <td>
              $
              {state.prices
                ? getCostFromPrices(state.currentProperty, state.prices)
                : ""}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RentList;
