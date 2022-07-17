// import population from "../../data/records/population";
// import names from "../../data/records/names";
// import pools from "../../data/records/pools";

// import _ from "lodash";
// import ToolTip from "./Tooltip";

// const rank = (data) => {
//   let ranks = {};
//   _.sortBy(Object.entries(pools), (e) => e[1])
//     .reverse()
//     .forEach((e, i) => {
//       const [name] = e;
//       ranks[name] = i;
//     });
//   return ranks;
// };

// const rankedPopulation = rank(population);
// const rankedTotalPools = rank(pools);
// const totalStates = Object.keys(names).length;
// let poolsPerCapitaStateMap = {};
// for (const key of Object.keys(population)) {
//   const poolsPerCapita = pools[key] / population[key];

//   poolsPerCapitaStateMap[key] = poolsPerCapita || 0;
// }

// const formatData = (
//   data: { label: string; value: string | number }[]
// ) => {
//   return Object.entries(data).map((d) => {
//     const [name, value] = d;
//     // if (!pools[name]) return "<p>none</p>";
//     const html = ToolTip([
//       { label: "State", value: name },
//       { label: "pools", value },
//     ]);

//     return [name, value, html];
//   });
// };

// export function getRange(numbers) {
//   return {
//     minValue: numbers.reduce(
//       (n, m) => Math.min(n, m),
//       numbers[0]
//     ),
//     maxValue: numbers.reduce(
//       (n, m) => Math.max(n, m),
//       numbers[0]
//     ),
//   };
// }
// export default function drawMap() {
//   const dataHeader = [
//     "Country",
//     "Popularity",
//     { role: "tooltip", p: { html: true } },
//   ];

//   const data = window.google.visualization.arrayToDataTable(
//     [dataHeader, ...formatData(poolsPerCapitaStateMap)]
//   );

//   const sizeAxis = getRange(
//     Object.values(poolsPerCapitaStateMap)
//   );

//   const options = {
//     region: "US",
//     resolution: "provinces",
//     tooltip: {
//       isHtml: true,
//     },
//     colorAxis: {
//       minValue: sizeAxis.minValue,
//       colors: ["white", "blue"],
//       maxValue: sizeAxis.maxValue,
//     },
//     datalessRegionColor: "#f8bbd0",
//     defaultColor: "#f5f5f5",
//     sizeAxis,
//   };

//   const chart = new (
//     window as any
//   ).google.visualization.GeoChart(
//     document.getElementById("map")
//   );

//   chart.draw(data, options);
// }
