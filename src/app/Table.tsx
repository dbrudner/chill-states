import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { startCase } from "lodash";
import React, { useMemo } from "react";
import { IMapData, useMapData } from "./context/map-data";

const columns = (
  numerator: string
  // denominator: string
) => {
  const numeratorHeader = startCase(numerator);
  // const denominatorHeader = startCase(denominator);

  return [
    { field: "id", headerName: "" },
    {
      field: "numeratorData",
      headerName: numeratorHeader,
      valueFormatter: ({ value }) => value.toLocaleString(),
      width: 100,
    },
    // {
    //   field: "denominator",
    //   headerName: denominatorHeader,
    //   valueFormatter: ({ value }) => value.toLocaleString(),
    // },
    // {
    //   field: "numeratorPerDenominator",
    //   headerName: `${numeratorHeader} per ${denominatorHeader}`,
    //   valueFormatter: ({ value }) => value.toFixed(2),
    // },
    // {
    //   field: "denominatorPerNumerator",
    //   headerName: `${denominatorHeader} per ${numeratorHeader}`,
    //   valueFormatter: ({ value }) => value.toFixed(2),
    // },
    {
      field: "numeratorRanks",
      headerName: `${numeratorHeader} rank`,
      valueFormatter: ({ value }) => "#" + (value + 1),
    },
    // {
    //   field: "denominatorRank",
    //   headerName: `${denominatorHeader} rank`,
    //   valueFormatter: ({ value }) => "#" + value,
    // },
  ];
};

export const Table = () => {
  const {
    numerator,
    denominator,
    numeratorData,
    denominatorData,
    numeratorRanks,
    denominatorRanks,
    isFetched,
    stateNames,
  } = useMapData();

  if (!numeratorData) return null;

  const rows = Object.keys(stateNames).map((state) => {
    return {
      id: stateNames[state],
      // numerator: numerator[state],
      // denominator: denominator[state],
      numeratorData: numeratorData[state],
      // denominatorData: denominatorData[state],
      numeratorRanks: numeratorRanks[state],
      // denominatorRanks: denominatorRanks[state],
    };
  });

  return (
    <DataGrid
      rows={rows}
      columns={columns(numerator, denominator)}
    />
  );
};
