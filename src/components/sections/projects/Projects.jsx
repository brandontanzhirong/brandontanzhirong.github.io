import React from "react";
import Color from "color";
import {
  Typography,
  Grid,
  CardActionArea,
  Card,
  CardContent,
  Box,
  Container,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import TechStackSelection from "./TechStackSelection";

const projectList = [
  {
    title: "Maze Runner",
    description: "A Java project",
    techStack: ["Java"],
  },
  {
    title: "MyEventBrite",
    description:
      "An android apps for monitoring a private event where each valid person can only have one ticket.",
    techStack: ["Android", "Firestore", "Kotlin"],
  },
  {
    title: "My Digit Span",
    description: "Flutter Apps for Digit Span",
    techStack: ["Flutter", "Dart", "Mobile App"],
  },
  {
    title: "Self Enrichment App",
    description:
      "An android App that helps people to improve mentally and physically",
    techStack: ["Flutter", "Dart", "Mobile App"],
  },
  {
    title: "Bond Price Forecasting",
    description: "Forcast next month's bond price given current month details",
    techStack: [
      "Finance",
      "Deep Learning",
      "Microsoft Azure AutoML",
      "PowerBI",
    ],
  },
  {
    title: "NotGit",
    description: "It is a clone of Git",
    techStack: ["Java"],
  },
];

let filteredTechStacks = {};
for (let i = 0; i < projectList.length; i++) {
  for (let j = 0; j < projectList[i].techStack.length; j++) {
    filteredTechStacks[projectList[i].techStack[j]] = false;
  }
}
filteredTechStacks["Java"] = true;

const CustomCard = ({ title, description }) => {
  return (
    <CardActionArea
      sx={{
        width: "100%",
        borderRadius: "1.5rem",
        transition: "0.2s",
        "&:hover": {
          transform: "scale(1.1)",
          ".overlay-tech-stack": { top: 0 },
        },
        overflow: "hidden",
      }}
    >
      <Card
        sx={{
          width: "100%",
          height: "200px",
          boxShadow: "none",
          "&:hover": {
            boxShadow: `0 6px 12px 0 ${Color("#203f52")
              .rotate(-12)
              .darken(0.2)
              .fade(0.5)}`,
          },
        }}
      >
        <CardContent
          sx={{
            backgroundColor: "#203f52",
            height: "100%",
            textAlign: "left",
            p: "15%",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
            variant={"h3"}
          >
            {title}
          </Typography>
          <Typography
            variant={"subtitle1"}
            sx={{
              color: "#fff",
              marginTop: "0.2rem",
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
      <Box
        className="overlay-tech-stack"
        sx={{
          position: "absolute",
          left: 0,
          top: "100%",
          width: "100%",
          height: "100%",
          zIndex: 1,
          transition: "all 350ms cubic-bezier(0, 0, 0.2, 1)",
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(60,179,113 ,0.8)",
        }}
      ></Box>
    </CardActionArea>
  );
};

function filterProjectList(projectList, filteredTechStacks) {
  let filteredProjectList = [];
  filteredTechStacks = Object.keys(filteredTechStacks).filter(
    (label) => filteredTechStacks[label]
  );
  for (let i = 0; i < projectList.length; i++) {
    if (
      filteredTechStacks.every((val) => projectList[i].techStack.includes(val))
    ) {
      filteredProjectList.push(projectList[i]);
    }
  }

  return filteredProjectList;
}

export default function Projects() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = Math.ceil(projectList.length / 4);
  const [chipData, setChipData] = React.useState(filteredTechStacks);
  const filteredProjects = filterProjectList(projectList, chipData);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container id="projects" component="section" sx={{ width: { md: "65%" } }}>
      <Box>
        <Typography variant="h2" sx={{ margin: "1em", fontWeight: 700 }}>
          Projects
        </Typography>
        <TechStackSelection
          chipData={chipData}
          setChipData={setChipData}
          isFilteredChips={false}
        />
        <br />
        <Typography variant="h5" sx={{ textAlign: "left" }}>
          Showing projects filtered by:
        </Typography>
        <TechStackSelection
          chipData={chipData}
          setChipData={setChipData}
          isFilteredChips={true}
        />
        <br />

        <Grid
          justifyContent="left"
          alignContent="center"
          container
          spacing={4}
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          {filteredProjects.map(
            (project, index) =>
              Math.floor(index / 4) === activeStep && (
                <Grid
                  item
                  md={3}
                  key={project.title}
                  sx={{ width: { xs: "65%", md: "100%" } }}
                >
                  <CustomCard
                    title={project.title}
                    description={project.description}
                  />
                </Grid>
              )
          )}
        </Grid>
      </Box>
      <br />
      <MobileStepper
        sx={{ backgroundColor: "transparent" }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Container>
  );
}
