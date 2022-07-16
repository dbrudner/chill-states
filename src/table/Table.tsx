import poolsByStateData from "../data/pools-by-state";
import popByState from "../data/pop-by-state";
import stateNames from "../data/state-names";

import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { green } from "@mui/material/colors";
// <ul>
//   <li><strong>${stateNames[state]}</strong></li>
//   <li>People: ${popByState[state] || ""}</li>
//     <li>Pools: ${poolsByStateData[state] || ""}</li>
//     <li>PPP (pools per peson): ${(
//       poolsByStateData[state] / popByState[state]
//     ).toFixed(5)}

const rows = Object.entries(stateNames).map((s) => {
  const [abbreviation, name] = s;
  return {
    name,
    pools: poolsByStateData[abbreviation],
    people: popByState[abbreviation],
    id: abbreviation,
  };
});

const columns = [
  { field: "id", headerName: "Abbreviation" },
  { field: "name", headerName: "Name" },
  { field: "pools", headerName: "Pools" },
  { field: "people", headerName: "People" },
];

console.log({ rows });

export const DataTable = () => (
  <Box sx={{ height: 400, width: "100%" }}>
    <DataGrid
      rows={rows}
      columns={columns}
      sx={{
        "MuiDataGrid-columnHeaders": {
          borderColor: "green",
        },
      }}
    />
  </Box>
);
