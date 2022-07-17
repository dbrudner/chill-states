import useMapData from "./use-map-data";

export default function useMap() {
  const { numerator, denominator, query } = useMapData();
  const { data } = query;
  const { google } = window as any;

  google.charts.load("current", {
    packages: ["geochart"],
    mapsApiKey: process.env.MAPS_KEY,
  });

  google.charts.setOnLoadCallback(draw);
}
