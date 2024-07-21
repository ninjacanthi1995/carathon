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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Presentation page components
import ExampleCard from "pages/Presentation/components/ExampleCard";

// Data
import data from "pages/Presentation/sections/data/carTypeData";
import { useDispatch } from "react-redux";
import { setCarType } from "reduxData/slices/carTypeSlice";

function DesignBlocks() {
  const dispatch = useDispatch();

  const renderData = (
    <Grid container spacing={3} sx={{ mb: 10 }} key="car-type">
      <Grid item xs={12} lg={12}>
        <Grid container spacing={3}>
          {data.map(({ image, label, price }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={label}>
              <Link to="/contact-us" onClick={() => dispatch(setCarType(label))}>
                <ExampleCard image={image} name={label} price={price} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <MKBox component="section" my={6} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKTypography variant="h2" fontWeight="bold">
            Xe Dành Cho Bạn
          </MKTypography>
          <MKTypography variant="body1" color="text">
            Chúng tôi có đa dạng các loại xe cho bạn thoải mái lựa chọn
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;
