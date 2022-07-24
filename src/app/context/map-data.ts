import React, { useContext } from "react";

export interface IMapDataContext {
  /** Input value from user-input select field
   * corresponding to a data source, e.g. "pools"
   *
   * Primary input source for data visualization
   */
  numerator: string;

  /** Input value from user-input select field
   * corresponding to a data source, e.g. "pools"
   *
   * Secondary input source for data visualization
   */
  denominator: string;

  /** Input value from user-input select field
   *
   * For now, either "total" to ignore denominator or "per"
   * to include denominator in data-visualizations
   *
   */
  mode: string;

  /**
   * React state-setter for this.numerator
   */
  setNumerator: React.Dispatch<
    React.SetStateAction<string>
  >;

  /**
   * React state-setter for this.denominator
   */
  setDenominator: React.Dispatch<
    React.SetStateAction<string>
  >;

  /**
   * React state-setter for this.mode
   */
  setMode: React.Dispatch<React.SetStateAction<string>>;
  isFetched: boolean;
  numeratorData: Record<string, number>;
  denominatorData: Record<string, number>;
  numeratorRanks: Record<string, number>;
  denominatorRanks: Record<string, number>;

  /**
   * Really need to go back and look at the whole /info setup
   * Think there's a very clean way to do it but until now, havent paid it much attention
   */
  infoData: any;
}

const formatChartData = (data: Record<string, number>) => {
  return Object.entries(data).map((d) => {
    const [name, value] = d;
    const html = "<p>hey</p>";

    return [name, value, html];
  });
};

const MapDataContext = React.createContext<IMapDataContext>(
  /**
   * Default context values
   */
  {
    numerator: "",
    denominator: "",
    mode: "",
    setNumerator: () => {},
    setDenominator: () => {},
    setMode: () => {},
    isFetched: false,
    numeratorData: {},
    denominatorData: {},
    numeratorRanks: {},
    denominatorRanks: {},
    infoData: {},
  }
);

export const useMapData = () => {
  return useContext(MapDataContext);
};

export default MapDataContext;
