import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales($)"],
  ["2004", 1000],
  ["2005", 1170],
  ["2006", 660],
  ["2007", 1030],
];

export const options = {
  curveType: "function",
  legend: { position: "top" },
};

export default function TempChart() {
  return (
    <Chart
      chartType="LineChart"
      width="95%"
      height="200px"
      data={data}
      options={options}
    />
  );
}
