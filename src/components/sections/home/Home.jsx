import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Navbar from "../../Navbar";

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
            textTransform: "uppercase",
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
          Computer Science (Artificial Intelligence) final year undergraduate
          with a current CGPA of 3.98 passionate about data science and machine
          learning. Experienced in AWS Cloud Services, had an internship in a
          fast-paced AWS Advanced Consulting Partner company and passed AWS
          Certified Solutions Architect – Associate exam.
        </Typography>
      </Container>
    </Box>
  );
}
