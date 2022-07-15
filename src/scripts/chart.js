import poolsByStateData from "../data/pools-by-state";
import {
  mapPoolbyStateToChartData,
  getRange,
} from "./pool-data-transform";

google.charts.load("current", {
  packages: ["geochart"],
  mapsApiKey: process.env.MAPS_KEY,
});

google.charts.setOnLoadCallback(drawRegionsMap);
function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    [
      "Country",
      "Popularity",
      { role: "tooltip", p: { html: true } },
    ],
    ...mapPoolbyStateToChartData(poolsByStateData),
  ]);
  console.log(
    ...mapPoolbyStateToChartData(poolsByStateData)
  );

  const sizeAxis = getRange(
    Object.values(poolsByStateData)
  );

  console.log({ sizeAxis });

  var options = {
    region: "US",
    resolution: "provinces",
    tooltip: {
      isHtml: true,
    },
    colorAxis: {
      minValue: sizeAxis.minValue,
      colors: ["white", "blue"],
      maxValue: sizeAxis.maxValue,
    },
    backgroundColor: "#81d4fa",
    datalessRegionColor: "#f8bbd0",
    defaultColor: "#f5f5f5",
    sizeAxis,
    // sizeAxis,
    // colorAxis: { colors: ["#e7711c", "#4374e0"] }, // orange to blue
  };
  var chart = new google.visualization.GeoChart(
    document.getElementById("regions_div")
  );

  chart.draw(data, options);
}
