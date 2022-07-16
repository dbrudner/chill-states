import poolsByStateData from "../data/pools-by-state";
import popByState from "../data/pop-by-state";
import stateNames from "../data/state-names";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

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
