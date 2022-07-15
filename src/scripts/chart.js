import poolsByStateData from "../data/pools-by-state";
import popByState from "../data/pop-by-state";
import {
  mapPoolbyStateToChartData,
  getRange,
} from "./pool-data-transform";

let poolsPerCapitaStateMap = {};
for (const key of Object.keys(popByState)) {
  const poolsPerCapita =
    poolsByStateData[key] / popByState[key];

  poolsPerCapitaStateMap[key] = poolsPerCapita * 10000 || 0;
}

console.log(poolsPerCapitaStateMap);
google.charts.load("current", {
  packages: ["geochart"],
  mapsApiKey: process.env.MAPS_KEY,
});

google.charts.setOnLoadCallback(drawRegionsMap);
function drawRegionsMap() {
  const data = google.visualization.arrayToDataTable([
    [
      "Country",
      "Popularity",
      { role: "tooltip", p: { html: true } },
    ],
    ...mapPoolbyStateToChartData(poolsPerCapitaStateMap),
  ]);

  const sizeAxis = getRange(
    Object.values(poolsPerCapitaStateMap)
  );

  const options = {
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
  };

  const chart = new google.visualization.GeoChart(
    document.getElementById("regions_div")
  );

  chart.draw(data, options);
}
