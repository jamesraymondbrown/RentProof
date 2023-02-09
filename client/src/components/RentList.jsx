import "./RentList.scss";
import React from "react";
import MultiRangeSlider from "./multiRangeSlider/MultiRangeSlider";
import BedFilter from "./BedFilter";
import BathFilter from "./BathFilter";
import { useContext } from "react";
import { MarkerFilterContext } from "../providers/MarkerFilterProvider";
import { DataBaseContext } from "../providers/DataBaseProvider";

const RentList = () => {
  const { state } = useContext(MarkerFilterContext);
  const { dataState } = useContext(DataBaseContext);

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
          dataState.prices
            ? getPhotoFromPrices(state.currentProperty, dataState.prices)
            : "https://s3.amazonaws.com/lws_lift/cressey/images/gallery/768/1405699411_201407_Cressey_VictoriaDr_H4_0004.jpg"
        }
        // src={
        //   "https://www.thehousedesigners.com/blog/wp-content/uploads/2019/10/House-Plan-7444-Living-Room.jpg"
        // }
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
              {dataState.prices
                ? getCostFromPrices(state.currentProperty, dataState.prices)
                : ""}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RentList;
