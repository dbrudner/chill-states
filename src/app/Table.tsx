import React from "react";
import pools from "../data/records/pools";
import names from "../data/records/names";
import population from "../data/records/population";
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
    console.log({ people, pools });
    return {
      id: abbreviation,
      name,
      pools,
      people,
      poolsPerCapita: Number((pools / people).toFixed(4)),
      peoplePerPool: Number((people / pools).toFixed(2)),
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
