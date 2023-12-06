import "./RentList.scss";
import React, { useState, useEffect, useMemo } from "react";
import BackButton from "./BackButton";
import MultiRangeSlider from "./multiRangeSlider/MultiRangeSlider";
import BedFilter from "./filters/BedFilter";
import BathFilter from "./filters/BathFilter";
import ChartsPanel from "./ChartsPanel";
import { useContext } from "react";
import { MarkerFilterContext } from "../providers/MarkerFilterProvider";
import { DataBaseContext } from "../providers/DataBaseProvider";
import {
  getCostFromPrices,
  getPhotoFromPrices,
  getSizeFromPrices,
  getBedroomsFromPrices,
  getBathroomsFromPrices,
} from "./helpers/getDataFromPrices";
import LazyLoad from "react-lazyload";
import WelcomeCard from "./WelcomeCard";

const RentList = () => {
  const { state } = useContext(MarkerFilterContext);
  const { users, setUsers, properties, setProperties, prices, setPrices } =
    useContext(DataBaseContext);

  const [showCharts, setShowCharts] = useState(false);
  const [chartData, setChartData] = useState(null);

  const cost = useMemo(() => {
    return prices ? getCostFromPrices(state.currentProperty, prices) : "";
  }, [prices, state.currentProperty]);

  const photo = useMemo(() => {
    return prices
      ? getPhotoFromPrices(state.currentProperty, prices)
      : "https://media.npr.org/assets/img/2013/12/10/ap101018123881-ca0472fba716df4b485fff878b558284cdc89ab9.jpg";
  }, [prices, state.currentProperty]);

  const size = useMemo(() => {
    return prices ? getSizeFromPrices(state.currentProperty, prices) : "";
  }, [prices, state.currentProperty]);

  const bedrooms = useMemo(() => {
    return prices ? getBedroomsFromPrices(state.currentProperty, prices) : "";
  }, [prices, state.currentProperty]);

  const bathrooms = useMemo(() => {
    return prices ? getBathroomsFromPrices(state.currentProperty, prices) : "";
  }, [prices, state.currentProperty]);

  useEffect(() => {
    if (showCharts) {
      // fetch chart data from API
      // setChartData(data)
    }
  }, [showCharts]);

  return (
    <div className="RentList">
      <div className="slider-container">
        <MultiRangeSlider style={{ height: "20px" }} />

        <BedFilter />

        <BathFilter />

        {state.currentProperty.id ? <BackButton /> : <></>}
      </div>
      {state.currentProperty.id ? (
        <React.Fragment>
          <div className="img-container">
            <img
              src={
                prices
                  ? getPhotoFromPrices(state.currentProperty, prices)
                  : "https://imgur.com/QjyKoRq"
              }
              alt="Rent List"
              className="image"
            />
          </div>
          <div className="info">
            <div className="BubbleDetail_priceContainer__Zfrap">
              <div className="price">
                $
                {prices ? getCostFromPrices(state.currentProperty, prices) : ""}
              </div>
            </div>
          </div>
          <table className="home-right-property-table-top">
            <thead>
              <tr>
                <th>Address</th>
                <th>City</th>
                <th>Province</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{state.currentProperty.street_address}</td>
                <td>{state.currentProperty.city}</td>
                <td>{state.currentProperty.province}</td>
              </tr>
            </tbody>
          </table>
          <table className="home-right-property-table-bottom">
            <thead>
              <tr>
                <th>Bedrooms</th>
                <th>Bathrooms</th>
                <th>Size</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {prices
                    ? getBedroomsFromPrices(state.currentProperty, prices)
                    : ""}{" "}
                </td>
                <td>
                  {prices
                    ? getBathroomsFromPrices(state.currentProperty, prices)
                    : ""}{" "}
                </td>
                <td>
                  {prices
                    ? getSizeFromPrices(state.currentProperty, prices)
                    : ""}{" "}
                  ft&#178;
                </td>
              </tr>
            </tbody>
          </table>
        </React.Fragment>
      ) : (
        <>
          <img
            src="/too_damn_dry.png"
            alt="Rent List"
            className="image too_damn_dry"
          />
          <WelcomeCard />
          {/* <table className="home-right-property-table-top">
            <thead>
              <tr>
                <th>Properties</th>
                <th>Prices</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{properties.length}</td>
                <td>{prices.length}</td>
              </tr>
            </tbody>
          </table> */}
        </>
      )}
      <ChartsPanel />
    </div>
  );
};

export default RentList;