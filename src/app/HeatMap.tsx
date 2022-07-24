import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useMapData } from "./context/map-data";

const HeatMap = () => {
  const [loaded, setLoaded] = useState(false);
  const {
    numerator,
    // denominator,
    numeratorData,
    // denominatorData,
    isFetched,
  } = useMapData();

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
    if (loaded && isFetched && numerator) {
      drawMap(Object.entries(numeratorData), numerator);
    }
  }, [loaded, numerator, numeratorData, isFetched]);

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
