import "./RentList.scss";
import React from "react";
import MultiRangeSlider from "./multiRangeSlider/MultiRangeSlider";
import BedFilter from "./BedFilter";
import BathFilter from "./BathFilter";
import ChartsPanel from "./ChartsPanel";
import { useContext } from "react";
import { MarkerFilterContext } from "../providers/MarkerFilterProvider";
import { DataBaseContext } from "../providers/DataBaseProvider";
import {
  getCostFromPrices,
  getPhotoFromPrices,
} from "./helpers/getDataFromPrices";

const RentList = () => {
  const { state } = useContext(MarkerFilterContext);
  const { dataState } = useContext(DataBaseContext);

  return (
    <div className="RentList">
      <div className="slider-container">
        <MultiRangeSlider style={{ height: "20px" }} />

        <BedFilter />

        <BathFilter />
      </div>
      <img
        src={
          dataState.prices && state.currentProperty.id
            ? getPhotoFromPrices(state.currentProperty, dataState.prices)
            : "https://media.npr.org/assets/img/2013/12/10/ap101018123881-ca0472fba716df4b485fff878b558284cdc89ab9.jpg"
        }
        alt="Rent List"
        className="image"
      />

      {state.currentProperty.id && (
        <div className="info">
          <div className="BubbleDetail_priceContainer__Zfrap">
            <div className="price">
              $
              {dataState.prices
                ? getCostFromPrices(state.currentProperty, dataState.prices)
                : ""}
            </div>
            <div className="divider"></div>
          </div>
          <div className="col BubbleDetail_colAddress__37E3b">
            <h1 className="name">
              <a href="#0">Kingston Tower</a>
            </h1>
            <a className="undername" href="#0">
              {state.currentProperty.street_address},{" "}
            </a>
            <a
              className="BubbleDetail_cityState__1JOOk"
              href="/apartments/calgary-ab"
            >
              Calgary
            </a>
          </div>
        </div>
      )}

      {state.currentProperty.id && (
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
      )}

      <ChartsPanel />
    </div>
  );
};

export default RentList;
