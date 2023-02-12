import PropertyRentChart from "./charts/PropertyRentChart";
import RentIncreaseChart from "./charts/RentIncreaseChart";
import AllPropertiesPercentChart from "./charts/AllPropertiesPercentChart";
import SelectedPropertyVsAll from "./charts/SelectedPropertyVsAll";
import RentGrowthRateVsMarket from "./charts/RentGrowthRateVsMarket";
import { Panel } from "primereact/panel";
import { getPriceHistory } from "./helpers/getDataFromPrices";
import { useContext } from "react";
import { MarkerFilterContext } from "../providers/MarkerFilterProvider";
import { DataBaseContext } from "../providers/DataBaseProvider";
import "primeicons/primeicons.css";
import "./ChartsPanel.scss";

const ChartsPanel = () => {
  const { state } = useContext(MarkerFilterContext);
  const { users, setUsers, properties, setProperties, prices, setPrices } =
    useContext(DataBaseContext);

  return (
    <Panel
      header="Price Charts"
      righticon="pi pi-times"
      toggleable
      style={{ color: "#59B9F8" }}
      id="ChartsPanel"
    >
      {/* DOLLAR-BASED INDIVIDUAL PROPERTY RENT CHART */}
      {/* {state.currentProperty.id && ( */}
      {/* <div className="selected-property-charts">
          <div className="RentChart">
            {prices && state.currentProperty.id ? (
              <PropertyRentChart
                prices={getPriceHistory(state.currentProperty.id, prices)}
              />
            ) : (
              <div>Loading...</div>
            )}
          </div> */}

      {/* PERCENTAGE-BASED INDIVIDUAL PROPERTY RENT CHART */}
      {/* <div className="RentChart">
            {prices && state.currentProperty.id ? (
              <RentIncreaseChart
                prices={getPriceHistory(state.currentProperty.id, prices)}
              />
            ) : (
              <div>Loading...</div>
            )}
          </div> */}

      {/* Chart showing selected property's actual price vs what it would be if it followed the market trends */}
      {/* <div className="RentChart">
            {prices && state.currentProperty.id ? (
              <SelectedPropertyVsAll
                prices={prices}
                currentPropertyPrices={getPriceHistory(
                  state.currentProperty.id,
                  prices
                )}
                properties={properties}
              />
            ) : (
              <div>Loading...</div>
            )}
          </div> */}

      {/* Chart showing the current property's cumulative rent growth compared to the market rate */}
      {/* <div className="RentChart">
            {prices && state.currentProperty.id ? (
              <RentGrowthRateVsMarket
                prices={prices}
                currentPropertyPrices={getPriceHistory(
                  state.currentProperty.id,
                  prices
                )}
                properties={properties}
              />
            ) : (
              <div>Loading...</div>
            )}
          </div> */}
      {/* </div>
      )} */}

      {/* Chart showing the average rent increase percentage across all properties */}
      {!state.currentProperty.id && (
        <div className="RentChart">
          {prices ? (
            <AllPropertiesPercentChart
              prices={prices}
              properties={properties}
            />
          ) : (
            <div>Loading...</div>
          )}
        </div>
      )}
    </Panel>
  );
};

export default ChartsPanel;
