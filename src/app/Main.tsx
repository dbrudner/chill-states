import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import React, { useEffect, useMemo, useState } from "react";
// import { ReactQueryDevtools } from "@tanstack/react-query/d
import createRankRecord from "../../data/scripts/create-rank-record";
import Configure from "./Configure";
import MapDataContext from "./context/map-data";
import HeatMap from "./HeatMap";
import { Table } from "./Table";
import stateNames from "../../data/meta/names";
import * as records from "../../data/records";
import { Box } from "@mui/material";

const queryClient = new QueryClient();
queryClient.invalidateQueries({
  predicate: () => true,
});

const fetchMapData = async (sources: string[]) => {
  const params = new URLSearchParams();
  params.set("sources", sources.join(","));
  const url = `/.netlify/functions/data?${params.toString()}`;
  const response = await fetch(url);
  return await response.json();
};

const fetchInfo = async () => {
  const response = await fetch("/.netlify/functions/meta");
  const json = await response.json();
  return json;
};

const param = new URLSearchParams(window.location.search);

function Main() {
  const [numerator, setNumerator] = useState<string>(
    param.get("numerator") || ""
  );
  const [denominator, setDenominator] = useState<string>(
    param.get("denominator") || ""
  );
  const [mode, setMode] = useState<string>(
    param.get("mode") || "total"
  );

  const { data, isFetched, isLoading } = useQuery(
    ["fetchMapData", [numerator, denominator]],
    () => fetchMapData([numerator, denominator]),
    /**
     * Prevents re-fetching after resource has already been fetched
     *
     * This may need to change in the future when working with more dynamic data
     * For now, this data-set is as static as it gets and staleness isn't a concern
     */
    {
      staleTime: Infinity,
    }
  );

  // const { data: infoData } = useQuery(["info"], fetchInfo);

  useEffect(() => {
    const url = new URL(window.location.href);

    url.searchParams.set("numerator", numerator);
    url.searchParams.set("denominator", denominator);
    url.searchParams.set("mode", mode);

    window.history.pushState({}, "", url);
  }, [numerator, denominator, mode]);

  const { numeratorData, denominatorData } = useMemo(() => {
    if (data) {
      return {
        numeratorData: data[numerator],
        denominatorData: data[denominator],
      };
    }
    return {};
  }, [data, numerator, denominator]);

  const { numeratorRanks } = useMemo(() => {
    if (data && numerator) {
      const numeratorRanks = createRankRecord(
        data[numerator]
      );
      // const denominatorRanks = createRankRecord(
      //   data[denominator]
      // );

      return {
        numeratorRanks,
        // denominatorRanks
      };
    }
    return {
      numeratorRanks: {},
      // denominatorRanks: {}
    };
  }, [data, numerator, denominator]);

  const mapDataContextValue = {
    numerator,
    denominator,
    numeratorData,
    denominatorData,
    numeratorRanks,
    denominatorRanks: {},
    setNumerator,
    setDenominator,
    mode,
    setMode,
    isFetched,
    isLoading,
    availableRecords: Object.keys(records),
    stateNames,
  };

  return (
    <MapDataContext.Provider value={mapDataContextValue}>
      <Configure />
      <HeatMap />
      <Box
        sx={{
          height: 600,
          maxWidth: "100%",
          margin: "auto",
          mt: 10,
        }}
      >
        <Table />
      </Box>
    </MapDataContext.Provider>
  );
}

export default () => (
  <QueryClientProvider client={queryClient}>
    <Main />
  </QueryClientProvider>
);
