import React from "react";
import Configure from "./Configure";
import { DataTable } from "./Table";
import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});
export default function Main() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Configure />
      <DataTable />
    </ThemeProvider>
  );
}
