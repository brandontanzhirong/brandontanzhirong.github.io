import { Box, Button, Container, keyframes, Typography } from "@mui/material";
import React from "react";
import Navbar from "../../Navbar";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const oscillate = keyframes`
  0% {
    transform: rotate(90deg) translateX(0);
  }
  50% {
    transform: rotate(90deg) translateX(-40%);
  }
  100% {
    transform: rotate(90deg) translateX(0);
  }
`;

export default function Home() {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        color: "#FFFFFF",
        backgroundColor: "#000000",
      }}
    >
      <Navbar />
      <Container
        sx={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h1"
          color="inherit"
          sx={{
            fontWeight: "200",
          }}
        >
          Hey there! <br />I am{" "}
          <Typography
            variant="h1"
            color="inherit"
            component="span"
            sx={{
              textTransform: "uppercase",
              fontWeight: "500",
            }}
          >
            Brandon Tan Zhirong
          </Typography>
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontStyle: "italic",
            marginBottom: "10px",
            color: "#EEEEEE",
            fontWeight: "100",
          }}
        >
          Data Engineer/Scientist
        </Typography>
        <hr />
        <Typography
          variant="subtitle1"
          sx={{
            marginTop: "20px",
            color: "#CCCCCC",
            textAlign: "left",
            width: { md: "65%" },
            mx: { xs: 0, md: "auto" },
          }}
        >
          A Data Engineer/Scientist with exposure on data science and data engineering in one of the biggest companies in Singapore. 
          Experienced in AWS Cloud Services, had an internship in a fast-paced AWS Advanced Consulting Partner company and
          passed AWS Certified Solutions Architect – Associate exam. Also, with passion on AWS Cloud Computing Technology,
          took the initiative to take and pass AWS Certified Data Analytics - Specialty exam in 2023.
        </Typography>
      </Container>
      <Button
        href="#projects"
        color="inherit"
        sx={{ marginBottom: "3%", fontSize: "3em" }}
      >
        <ArrowForwardIosRoundedIcon
          fontSize="inherit"
          color="inherit"
          sx={{
            transform: "rotate(90deg)",
            animation: `${oscillate} 1s infinite ease`,
          }}
        />
      </Button>
    </Box>
  );
}
