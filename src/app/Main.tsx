import React, { useEffect } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryParamProvider } from "use-query-params";
import Configure from "./Configure";
import HeatMap from "./HeatMap";
import MapDataContext from "./context/map-data";
import useMapData from "./hooks/use-map-data";
import { Table } from "./Table";

const queryClient = new QueryClient();
queryClient.invalidateQueries({
  predicate: () => true,
});

const fetchMapData = async (
  numerator: string,
  denominator: string
) => {
  const params = new URLSearchParams();
  params.set("numerator", numerator);
  params.set("denominator", denominator);
  const url = `/.netlify/functions/query?${params.toString()}`;
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

function Main() {
  const {
    numerator,
    denominator,
    setNumerator,
    setDenominator,
  } = useMapData();

  const { data } = useQuery(
    ["fetchMapData", numerator, denominator],
    () => fetchMapData(numerator, denominator),
    {
      staleTime: Infinity,
    }
  );

  return (
    <MapDataContext.Provider
      value={{
        numerator,
        denominator,
        setNumerator,
        setDenominator,
        mapData: data,
      }}
    >
      <ReactQueryDevtools initialIsOpen={false} />
      <Configure />
      {/* <HeatMap /> */}
      <Table />
    </MapDataContext.Provider>
  );
}

/**
 * Need to pull query param provider out here so i can use this random ass useMapData hook
 * because this random ass useQueryParam hook is dubious or more likely, i'm using it wrong
 *
 * Performantly, this caused a "re-render" (w/e the fuck that really means) whenever
 * the numerator or denominator change (which given this app, makes sense anyway)
 *
 * I truly dgaf about client-side performance
 */
export default () => (
  <QueryParamProvider>
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  </QueryParamProvider>
);
