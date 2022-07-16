import React from "react";
import poolsByStateData from "../data/pools-by-state";
import popByState from "../data/pop-by-state";
import stateNames from "../data/state-names";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
const rows = Object.entries(stateNames)
  .map((s) => {
    const [abbreviation, name] = s;
    const people = popByState[abbreviation];
    const pools = poolsByStateData[abbreviation];
    return {
      id: abbreviation,
      name,
      pools,
      people,
      poolsPerCapita: (pools / people).toFixed(4),
      peoplePerPool: (people / pools).toFixed(4),
    };
  })
  .filter((s) => Object.values(s).every(Boolean));

const columns = [
  { field: "id", headerName: "" },
  { field: "name", headerName: "Name" },
  { field: "pools", headerName: "Pools" },
  { field: "people", headerName: "People" },
  {
    field: "poolsPerCapita",
    headerName: "Pools/Person",
  },
  {
    field: "peoplePerPool",
    headerName: "People/Pool",
  },
];

export const DataTable = () => (
  <Box
    sx={{
      height: 600,
      maxWidth: "100%",
      margin: "auto",
      mt: 10,
    }}
  >
    <DataGrid rows={rows} columns={columns} />
  </Box>
);
