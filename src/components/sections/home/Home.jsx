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
          Final Year Undergraduate
          <br />
          Artificial Intelligence Department, University of Malaya
        </Typography>
        <hr />
        <Typography
          variant="subtitle1"
          sx={{
            marginTop: "20px",
            color: "#CCCCCC",
            mx: { xs: 0, sm: "10%" },
          }}
        >
          A student with a current CGPA of 3.98 passionate about data science
          and machine learning. Experienced in AWS Cloud Services, had an
          internship in a fast-paced AWS Advanced Consulting Partner company and
          passed AWS Certified Solutions Architect – Associate exam.
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
