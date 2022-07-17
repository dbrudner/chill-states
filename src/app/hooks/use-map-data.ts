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
  /**
   * Wrapping num/denom in useState --
   * useQueryParams is behaving strangely and not re-rendering on update
   * This forces a re-render when the numerator/denominator values change
   * and sets query params
   */
  const [numerator = "", setNumerator] = useState("");
  const [denominator = "", setDenominator] = useState("");
  const [queryParams, setQueryParams] = useQueryParams({
    numerator: StringParam,
    denominator: StringParam,
  });

  const query = useQuery(
    `${numerator}/${denominator}`,
    fetchMapData(numerator, denominator)
  );

  useEffect(() => {
    query.refetch();
    setQueryParams({ numerator, denominator });
  }, [numerator, denominator]);

  return {
    query,
    queryParams,
    numerator,
    denominator,
    setNumerator,
    setDenominator,
  };
}
