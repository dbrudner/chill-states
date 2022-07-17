import { useEffect } from "react";
import useMapData from "./hooks/use-map-data";

const HeatMap = () => {
  const { numerator, denominator, query } = useMapData();
  return <div id="map-area"></div>;
};

export default HeatMap;
