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

const fetchInfo = async () => {
  const response = await fetch("/.netlify/functions/info");
  const json = await response.json();
  return json;
};

export default function Configure() {
  const {
    numerator,
    setNumerator,
    denominator,
    setDenominator,
  } = useMapData();

  const { data } = useQuery("info", fetchInfo);

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
              onChange={(e) => {
                console.log(e.target.value);
                setDenominator(e.target.value);
              }}
              value={denominator || ""}
            >
              {data?.denominators?.map((n) => (
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
