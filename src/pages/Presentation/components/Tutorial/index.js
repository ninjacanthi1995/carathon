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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import tutorial1 from "assets/images/tutorials/tutorial_1.jpg";
import tutorial2 from "assets/images/tutorials/tutorial_2.jpg";
import tutorial3 from "assets/images/tutorials/tutorial_3.jpg";
import tutorial4 from "assets/images/tutorials/tutorial_4.jpg";

function Tutorial() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Hướng dẫn thuê xe trên Carathon
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Đặt xe chưa bao giờ đơn giản hơn với chỉ 4 bước
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={tutorial1}
                name="01"
                position={{ color: "info", label: "Chọn ngày và địa điểm nhận/trả xe" }}
                description="Chọn thành phố và thời gian thuận tiện cho việc thuê xe"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={tutorial2}
                name="02"
                position={{ color: "info", label: "Chọn loại xe" }}
                description="Chọn dòng xe phù hợp với nhu cầu của bạn"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={tutorial3}
                name="03"
                position={{ color: "info", label: "Điền thông tin liên hệ" }}
                description="Cung cấp thông tin cần thiết như điện thoại, email"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={tutorial4}
                name="04"
                position={{ color: "info", label: "Gửi yêu cầu đặt xe" }}
                description="Chúng tôi sẽ liên hệ với bạn sớm nhất có thể"
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Tutorial;
