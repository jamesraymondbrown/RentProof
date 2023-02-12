import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import "./Charts.scss";

const RentIncreaseChart = (props) => {
  const data = [];
  const prices = props.prices;
  const properties = props.properties;
  console.log("prices", prices);

  const getRentIncreaseAverages = (prices, properties) => {
    const priceObject = {};
    const allIncreasesPerYear = {
      2014: [],
      2015: [],
      2016: [],
      2017: [],
      2018: [],
      2019: [],
      2020: [],
      2021: [],
      2022: [],
      2023: [],
    };

    // Add an array to the priceObject, for each property. The key is that property's ID
    for (const property of properties) {
      priceObject[property.id] = [];
    }

    // Push the price data for each property into the correct array
    console.log(
      "priceObject",
      prices
      // prices.filter((price) => price.property_id === undefined)
    );
    for (const price of prices) {
      priceObject[price.property_id].push(price);
    }

    // Loop through each property to get an integer for querying the priceObject object
    for (let i = 1; i < properties.length + 1; i++) {
      // Another loop for getting the index of the array inside of each priceObject index (priceObject is an object full of arrays)
      for (let j = 1; j < priceObject[i].length; j++) {
        // Compare the current year's price with last year's price, and push the difference as a percentage to the increasePerYear object
        allIncreasesPerYear[priceObject[i][j].date.substring(0, 4)].push(
          Math.round(
            ((parseInt(priceObject[i][j].price) -
              parseInt(priceObject[i][j - 1].price)) /
              parseInt(priceObject[i][j - 1].price)) *
              100 *
              10
          ) / 10
        );
      }
    }

    // now we have an allIncreasesPerYear object, that contains an array with the percentage increase for each property, for each year
    // Loop through that data to get the average increase per year, and push that to our data array

    for (let i = 2015; i <= 2023; i++) {
      let sum = 0;
      for (const indexValue of allIncreasesPerYear[i]) {
        sum += indexValue;
      }
      data.push({
        date: i,
        increase: Math.round((sum / allIncreasesPerYear[i].length) * 100) / 100,
      });
    }

    return;
  };

  getRentIncreaseAverages(prices, properties);

  // Adding allowable increase amounts to our data array, based on this source:
  // https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies/during-a-tenancy/rent-increases
  data[0].allowable_increase = 2.5;
  data[1].allowable_increase = 2.9;
  data[2].allowable_increase = 3.7;
  data[3].allowable_increase = 4.0;
  data[4].allowable_increase = 2.5;
  data[5].allowable_increase = 2.6;
  data[6].allowable_increase = 0.0;
  data[7].allowable_increase = 1.5;
  data[8].allowable_increase = 2.0;

  // console.log(data);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label tooltip-text">{`Year: ${label}`}</p>
          <p className="tooltip-text">{`Average increase percentage: ${payload[0].value}%`}</p>
          <p className="tooltip-text">{`Allowable increase for existing leases: ${payload[1].value}%`}</p>
          {/* {console.log("load", payload)} */}
        </div>
      );
    }
    return null;
  };

  // for (let i = 1; i < prices.length; i++) {
  //   if (prices[i].admin_status === "approved") {
  //     data.push({
  //       date: prices[i].date.substring(0, 4),
  //       increase:
  //         Math.round(
  //           ((parseInt(prices[i].price) - parseInt(prices[i - 1].price)) /
  //             parseInt(prices[i - 1].price)) *
  //             100 *
  //             10
  //         ) / 10,
  //       increase_amount:
  //         parseInt(prices[i].price) - parseInt(prices[i - 1].price),
  //     });
  //   }
  // }

  return (
    <div>
      <div className="chart-title">
        Average rent increases across all properties:
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5AB8F8" stopOpacity={0.75} />
              <stop offset="75%" stopColor="#5AB8F8" stopOpacity={0.2} />
            </linearGradient>
          </defs>

          <Area dataKey="increase" stroke="#D0312D" fill="#DEDEDE" />
          <Area
            dataKey="allowable_increase"
            stroke="#5AB8F8"
            fill="url(#color)"
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" opacity={0.75} />
          <XAxis
            dataKey="date"
            // ticks={["2014", "2016", "2018", "2020", "2022", "2024"]}
          />
          <YAxis
            dataKey="increase"
            domain={[0, 15]}
            tickCount={6}
            ticks={[3, 6, 9, 12, 15]}
            tickFormatter={(increase) => `${increase}%`}
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: "none" }}
          />
        </AreaChart>
        {/* <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis
            dataKey="price"
            domain={[
              parseInt(data[0].price) - 500,
              parseInt(data[data.length - 1].price) + 500,
            ]}
          />
          <Tooltip />
        </LineChart> */}
      </ResponsiveContainer>
    </div>
  );
};

export default RentIncreaseChart;
