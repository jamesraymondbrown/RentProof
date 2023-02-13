import "./RentList.scss";
import React from "react";
import BathFilter from "./filters/BathFilter";
import BedFilter from "./filters/BedFilter";
import ChartsPanel from "./ChartsPanel";
import { useContext } from "react";
import { MarkerFilterContext } from "../providers/MarkerFilterProvider";
import { DataBaseContext } from "../providers/DataBaseProvider";
import MultiRangeSlider from "./multiRangeSlider/MultiRangeSlider";
import {
  getCostFromPrices,
  getPhotoFromPrices,
  getSizeFromPrices
} from "./helpers/getDataFromPrices";

const RentList = () => {
  const { state } = useContext(MarkerFilterContext);
  const { users, setUsers, properties, setProperties, prices, setPrices } =
    useContext(DataBaseContext);

  return (
    <div className="RentList">
      <div className="slider-container">
        <MultiRangeSlider style={{ height: "20px" }} />

        <BedFilter />

        <BathFilter />
      </div>
      <img
        src={
          prices && state.currentProperty.id
            ? getPhotoFromPrices(state.currentProperty, prices)
            : "https://media.npr.org/assets/img/2013/12/10/ap101018123881-ca0472fba716df4b485fff878b558284cdc89ab9.jpg"
        }
        alt="Rent List"
        className="image"
      />

      {state.currentProperty.id && (
        <div className="info">
          <div className="BubbleDetail_priceContainer__Zfrap">
            <div className="price">
              ${prices ? getCostFromPrices(state.currentProperty, prices) : ""}
            </div>
          </div>
        </div>
      )}

      {state.currentProperty.id && (
        <table className="home-right-property-table">
          <thead>
            <tr>
              <th>Address</th>
              <th>Location</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{state.currentProperty.street_address}</td>
              <td>{state.currentProperty.city}</td>
              <td>
                {prices ? getSizeFromPrices(state.currentProperty, prices) : ""} ft&#178;
              </td>
            </tr>
          </tbody>
        </table>
      )}

      <ChartsPanel />
    </div>
  );
};

export default RentList;
