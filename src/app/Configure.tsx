import React, { useContext } from "react";
import {
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import startCase from "lodash/startCase";
import { useQuery } from "react-query";
import useMapData from "./hooks/use-map-data";
import MapDataContext from "./context/map-data";

const fetchInfo = async () => {
  const response = await fetch("/.netlify/functions/info");
  const json = await response.json();
  return json;
};

export default function Configure() {
  const { data } = useQuery("info", fetchInfo);
  const {
    numerator,
    denominator,
    setNumerator,
    setDenominator,
  } = useContext(MapDataContext);

  if (!data) return null;

  return (
    <div>
      <h2>Configure map</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <Select
              name="numerator"
              label="Option"
              onChange={(e) => setNumerator(e.target.value)}
              value={numerator}
            >
              <MenuItem value="">Choose...</MenuItem>
              {data?.numerators?.map((n) => (
                <MenuItem key={n} value={n}>
                  {startCase(n)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ mt: 2 }}>
            <FormLabel id="demo-radio-buttons-group-label">
              Denominator
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="denominator"
              value={denominator}
              onChange={(e) =>
                setDenominator(e.target.value)
              }
            >
              <FormControlLabel
                value="total"
                control={<Radio />}
                label="Total"
              />
              {data.denominators?.map((n) => (
                <FormControlLabel
                  key={n}
                  value={n}
                  control={<Radio />}
                  label={startCase(n)}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}
