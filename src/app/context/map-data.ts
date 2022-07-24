import React, { useContext } from "react";

export interface IMapData {
  numerator: Record<string, number>;
  denominator: Record<string, number>;
  numeratorRanks: Record<string, number>;
  denominatorRanks: Record<string, number>;
}

export interface IMapDataContext {
  numerator: string;
  denominator: string;
  setNumerator: React.Dispatch<
    React.SetStateAction<string>
  >;
  setDenominator: React.Dispatch<
    React.SetStateAction<string>
  >;
  isFetched: boolean;
  data: IMapData;
}

const formatChartData = (data: Record<string, number>) => {
  return Object.entries(data).map((d) => {
    const [name, value] = d;
    const html = "<p>hey</p>";

    return [name, value, html];
  });
};

const MapDataContext = React.createContext<IMapDataContext>(
  {
    numerator: "",
    denominator: "",
    setNumerator: () => {},
    setDenominator: () => {},
    isFetched: false,
    data: {
      numerator: {},
      denominator: {},
      numeratorRanks: {},
      denominatorRanks: {},
    },
  }
);

export const useMapData = () => {
  return useContext(MapDataContext);
};

export default MapDataContext;
