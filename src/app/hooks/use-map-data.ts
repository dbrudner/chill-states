import { createContext, useEffect, useState } from "react";
import {
  StringParam,
  useQueryParams,
} from "use-query-params";

export default function useMapData() {
  /**
   * Wrapping num/denom in useState --
   * useQueryParams is behaving strangely and not re-rendering on update
   * This forces a re-render when the numerator/denominator values change
   * and sets query params
   */
  const [numerator = "", setNumerator] =
    useState<string>("");
  const [denominator = "", setDenominator] =
    useState<string>("");
  const [queryParams, setQueryParams] = useQueryParams({
    numerator: StringParam,
    denominator: StringParam,
  });

  useEffect(() => {
    setQueryParams({ numerator, denominator });
  }, [numerator, denominator]);

  return {
    numerator,
    denominator,
    setNumerator,
    setDenominator,
    queryParams,
  };
}
