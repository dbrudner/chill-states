import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, {
  SelectChangeEvent,
} from "@mui/material/Select";
import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Box,
  Grid,
} from "@mui/material";

export default function Configure() {
  const [option, setOption] = React.useState("pool");

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value);
    console.log(event);
  };

  return (
    <div>
      <h2>Configure map</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Option
            </InputLabel>
            <Select
              value={option}
              label="Option"
              onChange={handleChange}
            >
              <MenuItem value="pool">Pool</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ mt: 2 }}>
            <FormLabel id="demo-radio-buttons-group-label">
              Denominator
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="perCapita"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="total"
                control={
                  <Radio onChange={(e) => console.log(e)} />
                }
                label="Total"
              />
              <FormControlLabel
                value="perCapita"
                control={<Radio />}
                label="Per Capita"
              />
              <FormControlLabel
                value="perArea"
                control={<Radio />}
                label="Per Sq. Mile"
              />
              <FormControlLabel
                value="perPropertyValue"
                control={<Radio />}
                label="Per Avg. Home Property Value"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}
