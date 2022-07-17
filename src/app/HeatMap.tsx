import { useEffect } from "react";
import useMapData from "./hooks/use-map-data";

const HeatMap = () => {
  const { numerator, denominator, query } = useMapData();
  console.log({ numerator, denominator, query });

  return <div id="map-area"></div>;
};

export default HeatMap;
