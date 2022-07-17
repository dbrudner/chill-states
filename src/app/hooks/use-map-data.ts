import { useEffect, useState } from "react";
import { useQuery, UseQueryResult } from "react-query";
import {
  StringParam,
  useQueryParam,
  useQueryParams,
} from "use-query-params";

const basePath = "/.netlify/functions";

export const fetchMapData =
  (numerator, denominator) => async () => {
    if (!numerator || !denominator) {
      // Should add a debug log here
      return;
    }
    const params = new URLSearchParams();
    params.set("numerator", numerator);
    params.set("denominator", denominator);
    const url = `${basePath}/query?${params.toString()}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

export default function useMapData() {
  const [numerator, setNumerator] = useQueryParam(
    "numerator",
    StringParam
  );
  const [denominator, setDenominator] = useQueryParam(
    "denominator",
    StringParam
  );

  const query = useQuery(
    `${numerator}/${denominator}`,
    fetchMapData(numerator, denominator)
  );

  useEffect(() => {
    query.refetch();
  }, [numerator, denominator]);

  return {
    query,
    numerator,
    denominator,
    setNumerator,
    setDenominator,
  };
}
