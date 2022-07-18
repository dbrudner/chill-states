import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { map, startCase } from "lodash";
import React, { useContext } from "react";
import { IMapData, useMapData } from "./context/map-data";

const rows = (data: IMapData) => {
  const {
    numerator = {} as any,
    denominator = {} as any,
    numeratorRanks,
    denominatorRanks,
  } = data || {};

  const states = Object.keys(numerator);

  return states.map((state) => {
    return {
      id: state,
      numerator: numerator[state].toLocaleString(),
      denominator: denominator[state].toLocaleString(),
      numeratorPerDenominator: (
        numerator[state] / denominator[state]
      ).toFixed(3),
      denominatorPerNumerator: (
        numerator[state] / denominator[state]
      ).toFixed(3),
      numeratorRank: numeratorRanks[state] + 1,
      denominatorRank: denominatorRanks[state] + 1,
    };
  });
};

const columns = (
  numerator: string,
  denominator: string
) => {
  const numeratorHeader = startCase(numerator);
  const denominatorHeader = startCase(denominator);
  return [
    { field: "id", headerName: "" },
    {
      field: "numerator",
      headerName: numeratorHeader,
    },
    {
      field: "denominator",
      headerName: denominatorHeader,
    },
    {
      field: "numeratorPerDenominator",
      headerName: `${numeratorHeader} per ${denominatorHeader}`,
    },
    {
      field: "denominatorPerNumerator",
      headerName: `${denominatorHeader} per ${numeratorHeader}`,
    },
    {
      field: "numeratorRank",
      headerName: `${numeratorHeader} rank`,
    },
    {
      field: "denominatorRank",
      headerName: `${denominatorHeader} rank`,
    },
  ];
};

export const Table = () => {
  const { numerator, denominator, mapData } = useMapData();

  if (!mapData || !numerator || !denominator) return null;

  return (
    <Box
      sx={{
        height: 600,
        maxWidth: "100%",
        margin: "auto",
        mt: 10,
      }}
    >
      <DataGrid
        rows={rows(mapData)}
        columns={columns(numerator, denominator)}
      />
    </Box>
  );
};
