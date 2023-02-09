import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page b", uv: 500, pv: 2800, amt: 2900 },
  { name: "Page c", uv: 800, pv: 2000, amt: 2000 },
];

for (let num = 30; num >= 0; num--) {
  data.push({
    date: num,
    value: 1 + Math.random(),
  });
}

// const renderLineChart = (
//   <LineChart
//     width={600}
//     height={300}
//     data={data}
//     margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
//   >
//     <Line type="monotone" dataKey="uv" stroke="#8884d8" />
//     <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
//     <XAxis dataKey="name" />
//     <YAxis />
//     <Tooltip />
//   </LineChart>
// );

const PropertyRentChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <Area dataKey="value"></Area>
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default PropertyRentChart;
