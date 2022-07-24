import React, { useEffect, useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query/d
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

const fetchMapData = async ({ numerator, denominator }) => {
  const params = new URLSearchParams();
  params.set("numerator", numerator);
  params.set("denominator", denominator);
  const url = `/.netlify/functions/query?${params.toString()}`;
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

const param = new URLSearchParams(window.location.search);
console.log(param.toString());

function Main() {
  const [numerator, setNumerator] = useState<string>(
    param.get("numerator") || ""
  );
  const [denominator, setDenominator] = useState<string>(
    param.get("denominator") || ""
  );

  const { data, isFetched } = useQuery(
    ["fetchMapData", { numerator, denominator }],
    () => fetchMapData({ numerator, denominator }),
    {
      staleTime: Infinity,
    }
  );

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("numerator", numerator);
    url.searchParams.set("denominator", denominator);
    window.history.pushState({}, "", url);
  }, [numerator, denominator]);

  return (
    <MapDataContext.Provider
      value={{
        numerator,
        denominator,
        setNumerator,
        setDenominator,
        data,
        isFetched,
      }}
    >
      <Configure />
      <HeatMap />
      <Table />
    </MapDataContext.Provider>
  );
}

export default () => (
  <QueryClientProvider client={queryClient}>
    <Main />
  </QueryClientProvider>
);
