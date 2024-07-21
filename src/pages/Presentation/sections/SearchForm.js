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
import { useDispatch, useSelector } from "react-redux";
import { setPickupDate } from "reduxData/slices/pickupDateSlice";
import { setReturnDate } from "reduxData/slices/returnDateSlice";
// import { setPickupCity } from "reduxData/slices/pickupCitySlice";
// import { setReturnCity } from "reduxData/slices/pickupCitySlice";
import MKDatePicker from "components/MKDatePicker";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { setPickupCity } from "reduxData/slices/pickupCitySlice";
import { setReturnCity } from "reduxData/slices/returnCitySlice";

function SearchForm() {
  const pickupDate = useSelector((state) => state.pickupDate.value);
  const returnDate = useSelector((state) => state.returnDate.value);
  const pickupCity = useSelector((state) => state.pickupCity.value);
  const returnCity = useSelector((state) => state.returnCity.value);

  const dispatch = useDispatch();

  return (
    <MKBox
      width="100%"
      component="form"
      method="get"
      autoComplete="off"
      // action={`/find?pickupDate=azeaze`}
    >
      <MKBox p={3} width="auto">
        <Grid container spacing={3} alignItems="center" justifyContent="center" width="auto">
          <Grid item xs={12} md={3}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={cities}
              renderInput={(params) => <TextField {...params} label="Điểm nhận" />}
              onChange={(e, val) => {
                console.log("val", val);
                dispatch(setPickupCity(val.label));
              }}
              value={pickupCity}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={cities}
              renderInput={(params) => <TextField {...params} label="Điểm trả" />}
              onChange={(e, val) => {
                console.log("val", val);
                dispatch(setReturnCity(val.label));
              }}
              value={returnCity}
            />
          </Grid>
          <Grid item xs={12} md={3} xl={2}>
            <MKDatePicker
              input={{ placeholder: "Ngày nhận" }}
              onChange={(e) => {
                console.log(e[0]);
                dispatch(setPickupDate(e[0].toString()));
              }}
              value={new Date(pickupDate)}
            />
          </Grid>
          <Grid item xs={12} md={3} xl={2}>
            <MKDatePicker
              input={{ placeholder: "Ngày trả" }}
              onChange={(e) => {
                console.log(e[0]);
                dispatch(setReturnDate(e[0].toString()));
              }}
              value={new Date(returnDate)}
            />
          </Grid>
          <Grid item>
            <MKButton variant="gradient" color="dark">
              <Link to={`/find`}>Tìm xe</Link>
            </MKButton>
          </Grid>
        </Grid>
      </MKBox>
    </MKBox>
  );
}

export default SearchForm;
