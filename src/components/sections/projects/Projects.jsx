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
  Chip,
  useMediaQuery,
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
    description:
      " A 2D game with a person searching for treasure in a limited vision and finding for its exit.",
    techStack: ["Java"],
  },
  {
    title: "MyEventBrite",
    description:
      "An android apps for monitoring a private event where each valid person can only have one ticket.",
    techStack: ["Android", "Firestore", "Kotlin", "Mobile App"],
  },
  {
    title: "My Digit Span",
    description: "Flutter Apps for Digit Span Memory Test",
    techStack: ["Flutter", "Mobile App"],
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
      "Python",
    ],
  },
  {
    title: "NotGit",
    description: "It is a clone of Git",
    techStack: ["Java"],
  },
  {
    title: "Bank Chatbot",
    description:
      "A chatbot that uses BERT model to match user question to the most relevant question in the database.",
    techStack: ["NLP", "Python"],
  },
  {
    title: "Self Love App",
    description:
      "A machine learning model that can predict suitable hobbies based on one's personality.",
    techStack: ["Machine Learning", "Deep Learning", "EDA", "Python"],
  },
  {
    title: "Social Distancing Detection",
    description: "People Detection and distance estimation between people.",
    techStack: ["Deep Learning", "Python", "Computer Vision"],
  },
];

let filteredTechStacks = {};
for (let i = 0; i < projectList.length; i++) {
  for (let j = 0; j < projectList[i].techStack.length; j++) {
    filteredTechStacks[projectList[i].techStack[j]] = false;
  }
}
filteredTechStacks["Deep Learning"] = true;

const CustomCard = ({ title, description, techStack }) => {
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
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <Box
          component="ul"
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            listStyle: "none",
            p: 0,
            m: 0,
          }}
        >
          {techStack.map((tech) => (
            <Box
              component="li"
              key={tech}
              sx={{
                marginRight: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <Chip
                label={tech.toUpperCase()}
                size="small"
                sx={{ fontWeight: 500, backgroundColor: "rgb(225 228 230)" }}
              />
            </Box>
          ))}
        </Box>
      </Box>
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
  const [chipData, setChipData] = React.useState(filteredTechStacks);
  const desktopMode = useMediaQuery(theme.breakpoints.up("md"));
  const filteredProjects = filterProjectList(projectList, chipData);
  const numPerRow = desktopMode ? 4 : 1;
  const maxSteps = Math.ceil(filteredProjects.length / numPerRow);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container id="projects" component="section" sx={{ width: { md: "65%" } }}>
      <Box>
        <Typography
          variant="h2"
          sx={{ paddingTop: "3rem", paddingBottom: "1.5rem", fontWeight: 700 }}
        >
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
              Math.floor(index / numPerRow) === activeStep && (
                <Grid
                  item
                  md={3}
                  key={project.title}
                  sx={{ width: { xs: "65%", md: "100%" } }}
                >
                  <CustomCard
                    title={project.title}
                    description={project.description}
                    techStack={project.techStack}
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
