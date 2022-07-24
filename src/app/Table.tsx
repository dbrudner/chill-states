import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { startCase } from "lodash";
import React from "react";
import { IMapData, useMapData } from "./context/map-data";

const rows = (data: IMapData) => {
  const {
    numerator = {} as any,
    denominator = {} as any,
    numeratorRanks,
    denominatorRanks,
  } = data;

  const states = Object.keys(numerator);

  return states.map((state) => {
    return {
      id: state,
      numerator: numerator[state],
      denominator: denominator[state],
      numeratorPerDenominator:
        numerator[state] / denominator[state],
      denominatorPerNumerator:
        denominator[state] / numerator[state],
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
      valueFormatter: ({ value }) => value.toLocaleString(),
      width: 100,
    },
    {
      field: "denominator",
      headerName: denominatorHeader,
      valueFormatter: ({ value }) => value.toLocaleString(),
    },
    {
      field: "numeratorPerDenominator",
      headerName: `${numeratorHeader} per ${denominatorHeader}`,
      valueFormatter: ({ value }) => value.toFixed(2),
    },
    {
      field: "denominatorPerNumerator",
      headerName: `${denominatorHeader} per ${numeratorHeader}`,
      valueFormatter: ({ value }) => value.toFixed(2),
    },
    {
      field: "numeratorRank",
      headerName: `${numeratorHeader} rank`,
      valueFormatter: ({ value }) => "#" + value,
    },
    {
      field: "denominatorRank",
      headerName: `${denominatorHeader} rank`,
      valueFormatter: ({ value }) => "#" + value,
    },
  ];
};

export const Table = () => {
  const { numerator, denominator, data } = useMapData();

  if (!data || !numerator || !denominator) return null;

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
        rows={rows(data)}
        columns={columns(numerator, denominator)}
      />
    </Box>
  );
};
