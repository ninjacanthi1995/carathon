/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import cities from "pages/Presentation/sections/data/citiesData";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";

function SearchForm() {
  return (
    <MKBox width="100%" component="form" method="get" autoComplete="off" action="/find">
      <MKBox p={3} width="auto">
        <Grid container spacing={3} alignItems="center" justifyContent="center" width="auto">
          <Grid item xs={12} md={3}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={cities}
              renderInput={(params) => <TextField {...params} label="Điểm nhận" />}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={cities}
              renderInput={(params) => <TextField {...params} label="Điểm trả" />}
            />
          </Grid>
          <Grid item xs={12} md={3} xl={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["MobileDateTimePicker"]}>
                <MobileDateTimePicker label="Ngày nhận" />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} md={3} xl={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["MobileDateTimePicker"]}>
                <MobileDateTimePicker label="Ngày trả" />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item>
            <MKButton type="submit" variant="gradient" color="dark">
              Tìm xe
            </MKButton>
          </Grid>
        </Grid>
      </MKBox>
    </MKBox>
  );
}

export default SearchForm;
