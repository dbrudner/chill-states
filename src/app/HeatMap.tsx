import React, { useEffect, useState } from "react";
import {
  useMapData
} from "./context/map-data";

const HeatMap = () => {
  const [loaded, setLoaded] = useState(false);
  const { numerator, denominator, data, isFetched } =
    useMapData();

  useEffect(() => {
    (window as any).google.charts.load("current", {
      packages: ["geochart"],
      mapsApiKey: process.env.MAPS_KEY,
    });

    (window as any).google.charts.setOnLoadCallback(() => {
      setLoaded(true);
    });
  }, [drawMap]);

  useEffect(() => {
    if (loaded && isFetched && numerator && denominator) {
      drawMap(Object.entries(data.numerator), numerator);
    }
  }, [loaded, numerator, denominator, data, isFetched]);

  return <div id="map-area"></div>;
};

function drawMap(
  data: [string, number][],
  numerator: string
) {
  const { google } = window as any;

  const dataHeader = ["Country", numerator];

  const chartData = google?.visualization.arrayToDataTable([
    dataHeader,
    ...data,
  ]);

  const options = {
    region: "US",
    resolution: "provinces",
    datalessRegionColor: "#f8bbd0",
    defaultColor: "#f5f5f5",
  };

  const chart = new google.visualization.GeoChart(
    document.getElementById("map")
  );

  chart.draw(chartData, options);
}

export default HeatMap;
