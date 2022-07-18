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
  mapData: IMapData;
}

const MapDataContext = React.createContext<IMapDataContext>(
  {
    numerator: "",
    denominator: "",
    setNumerator: () => {},
    setDenominator: () => {},
    mapData: {
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
