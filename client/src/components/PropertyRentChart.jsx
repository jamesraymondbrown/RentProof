import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const PropertyRentChart = (props) => {
  const data = [];

  for (let price of props.prices) {
    if (price.admin_status === "approved") {
      data.push({
        date: price.date.substring(0, 4),
        price: price.price,
      });
    }
  }

  return (
    <div>
      <div className="chart-title">Price History:</div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Area dataKey="price" />
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

export default PropertyRentChart;
