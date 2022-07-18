import React, { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import MapDataContext from "./context/map-data";
import useMapData from "./hooks/use-map-data";

const HeatMap = () => {
  // const { data, refetch } =

  // const drawMap = () => {};

  // useEffect(() => {
  //   fetchMapData(numerator, denominator).then(drawMap);
  // }, [numerator, denominator]);

  return <div id="map-area">Map area</div>;
};

export default HeatMap;
