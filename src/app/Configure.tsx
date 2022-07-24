import React, {
  useContext,
  useEffect,
  useRef,
} from "react";
import {
  Box,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import startCase from "lodash/startCase";
import {
  QueryClient,
  useQuery,
} from "@tanstack/react-query";
import { useMapData } from "./context/map-data";
import MapDataContext from "./context/map-data";

export default function Configure() {
  const {
    availableRecords,
    numerator,
    denominator,
    setNumerator,
    setDenominator,
    mode,
    setMode,
  } = useMapData();

  return (
    <div>
      <h2>Configure map</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              name="numerator"
              label="Source 1"
              onChange={(e) => setNumerator(e.target.value)}
              value={numerator}
              id="numerator"
              select
            >
              <MenuItem value=""></MenuItem>
              {availableRecords.map((n) => (
                <MenuItem key={n} value={n}>
                  {startCase(n)}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        </Grid>
        <Grid item md={2} xs={12}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              onChange={(e) => setMode(e.target.value)}
              value={mode}
              label="Mode"
              select
              disabled
            >
              <MenuItem value="total">Total</MenuItem>
              <MenuItem value="per">Per</MenuItem>
            </TextField>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={5}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              name="denomoninator"
              onChange={(e) =>
                setDenominator(e.target.value)
              }
              value={
                (mode === "per" && denominator) || "total"
              }
              id="denominator"
              label="Source 2"
              select
              disabled={mode !== "per"}
            >
              <MenuItem value="total">
                Per each state
              </MenuItem>
              {availableRecords.map((n) => (
                <MenuItem key={n} value={n}>
                  {startCase(n)}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}
