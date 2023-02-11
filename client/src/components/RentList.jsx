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
import SelectedPropertyVsAll from "./charts/SelectedPropertyVsAll";
import RentGrowthRateVsMarket from "./charts/RentGrowthRateVsMarket";

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

      {/* DOLLAR-BASED INDIVIDUAL PROPERTY RENT CHART */}
      {state.currentProperty.id && (
        <div className="selected-property-charts">
          <div className="RentChart">
            {dataState.prices && state.currentProperty.id ? (
              <PropertyRentChart
                prices={getPriceHistory(state.currentProperty.id, dataState)}
              />
            ) : (
              <div>Loading...</div>
            )}
          </div>

          {/* PERCENTAGE-BASED INDIVIDUAL PROPERTY RENT CHART */}
          <div className="RentChart">
            {dataState.prices && state.currentProperty.id ? (
              <RentIncreaseChart
                prices={getPriceHistory(state.currentProperty.id, dataState)}
              />
            ) : (
              <div>Loading...</div>
            )}
          </div>

          {/* Chart showing selected property's actual price vs what it would be if it followed the market trends */}
          <div className="RentChart">
            {dataState.prices && state.currentProperty.id ? (
              <SelectedPropertyVsAll
                prices={dataState.prices}
                currentPropertyPrices={getPriceHistory(
                  state.currentProperty.id,
                  dataState
                )}
                properties={dataState.properties}
              />
            ) : (
              <div>Loading...</div>
            )}
          </div>

          {/* Chart showing the current property's cumulative rent growth compared to the market rate */}
          <div className="RentChart">
            {dataState.prices && state.currentProperty.id ? (
              <RentGrowthRateVsMarket
                prices={dataState.prices}
                currentPropertyPrices={getPriceHistory(
                  state.currentProperty.id,
                  dataState
                )}
                properties={dataState.properties}
              />
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      )}

      {/* Chart showing the average rent increase percentage across all properties */}
      {!state.currentProperty.id && (
        <div className="RentChart">
          {dataState.prices ? (
            <AllPropertiesPercentChart
              prices={dataState.prices}
              properties={dataState.properties}
            />
          ) : (
            <div>Loading...</div>
          )}
        </div>
      )}
    </div>
  );
};

export default RentList;
