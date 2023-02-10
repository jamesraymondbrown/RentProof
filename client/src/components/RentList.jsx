import "./RentList.scss";
import React from "react";
import MultiRangeSlider from "./multiRangeSlider/MultiRangeSlider";
import BedFilter from "./BedFilter";
import BathFilter from "./BathFilter";
import { useContext } from "react";
import { MarkerFilterContext } from "../providers/MarkerFilterProvider";
import { DataBaseContext } from "../providers/DataBaseProvider";
import {
  getCostFromPrices,
  getPhotoFromPrices,
  getPriceHistory,
} from "./helpers/getDataFromPrices";
import PropertyRentChart from "./charts/PropertyRentChart";
import RentIncreaseChart from "./charts/RentIncreaseChart";
import AllPropertiesPercentChart from "./charts/AllPropertiesPercentChart";

const RentList = () => {
  const { state } = useContext(MarkerFilterContext);
  const { dataState } = useContext(DataBaseContext);

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
          dataState.prices && state.currentProperty.id
            ? getPhotoFromPrices(state.currentProperty, dataState.prices)
            : "https://s3.amazonaws.com/lws_lift/cressey/images/gallery/768/1405699411_201407_Cressey_VictoriaDr_H4_0004.jpg"
        }
        alt="Rent List"
        className="image"
      />

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

      {/* <table>
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
      </table> */}

      {/* DOLLAR-BASED INDIVIDUAL PROPERTY RENT CHART */}
      {/* <div className="PropertyRentChart">
        {dataState.prices && state.currentProperty.id ? (
          <PropertyRentChart
            prices={getPriceHistory(state.currentProperty.id, dataState)}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div> */}

      {/* PERCENTAGE-BASED INDIVIDUAL PROPERTY RENT CHART */}
      <div className="PropertyRentChart">
        {dataState.prices && state.currentProperty.id ? (
          <RentIncreaseChart
            prices={getPriceHistory(state.currentProperty.id, dataState)}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
      {/* 
      <div className="PropertyRentChart">
        {dataState.prices && state.currentProperty.id ? (
          <AllPropertiesPercentChart
            prices={getPriceHistory(state.currentProperty.id, dataState)}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div> */}
    </div>
  );
};

export default RentList;
