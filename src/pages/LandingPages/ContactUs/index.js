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
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Image
import bgImage from "assets/images/illustrations/illustration-reset.jpg";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { setPickupDate } from "reduxData/slices/pickupDateSlice";
import { setReturnDate } from "reduxData/slices/returnDateSlice";
import MKDatePicker from "components/MKDatePicker";

function ContactUs() {
  const pickupDate = useSelector((state) => state.pickupDate.value);
  const returnDate = useSelector((state) => state.returnDate.value);
  const dispatch = useDispatch();

  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "https://www.creative-tim.com/product/material-kit-react",
            label: "free download",
            color: "info",
          }}
        />
      </MKBox>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${bgImage})` }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Liên hệ với chúng tôi
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất có thể. Hoặc bạn có thể liên
                hệ với chúng tôi qua mail carathon@gmail.com
              </MKTypography>
              <MKBox width="100%" component="form" method="post" autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={[]}
                      renderInput={(params) => <TextField {...params} label="Loại xe" />}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={[]}
                      renderInput={(params) => <TextField {...params} label="Điểm nhận" />}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={[]}
                      renderInput={(params) => <TextField {...params} label="Điểm trả" />}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKTypography variant="body2" color="text">
                      Ngày nhận
                    </MKTypography>
                    <MKDatePicker
                      input={{ placeholder: "Ngày nhận" }}
                      onChange={(e) => {
                        dispatch(setPickupDate(e[0].toString()));
                      }}
                      value={new Date(pickupDate)}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKTypography variant="body2" color="text">
                      Ngày trả
                    </MKTypography>
                    <MKDatePicker
                      input={{ placeholder: "Ngày trả" }}
                      onChange={(e) => {
                        dispatch(setReturnDate(e[0].toString()));
                      }}
                      value={new Date(returnDate)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="Yêu cầu thêm"
                      placeholder="Bạn có yêu cầu gì thêm không ạ ?"
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={6}
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="info">
                    Gửi yêu cầu thuê xe
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
