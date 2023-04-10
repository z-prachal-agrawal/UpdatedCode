import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  CartesianGrid,
  Legend,
} from "recharts";
import { Data } from "./Data";

function TempLineChart() {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <LineChart
        layout="horizontal"
        width={800}
        height={300}
        data={Data}
        margin={{
          top: 10,
          right: 20,
          left: 30,
          bottom: 40,
        }}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis dataKey="name"></XAxis>
        <YAxis dataKey="activeUser">
          <Label value="Sales($)" angle={-90} position="left" />
        </YAxis>
        <Line
          name="Active User's"
          type="monotone"
          dataKey="activeUser"
          stroke="#1976d2"
          dot={false}
        />
      </LineChart>
    </div>
  );
}

export default TempLineChart;
