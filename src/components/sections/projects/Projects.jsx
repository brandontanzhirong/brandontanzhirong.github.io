import React from "react";
import { Typography, Grid, Box, Container, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import TechStackSelection from "./TechStackSelection";
import CustomProjectCard from "./CustomProjectCard";

const projectList = [
  {
    title: "Maze Runner",
    description:
      " A 2D game with a person searching for treasure in a limited vision and finding for its exit.",
    techStack: ["Java"],
    githubLink: "https://github.com/brandontanzhirong/MazeRunner",
  },
  {
    title: "MyEventBrite",
    description:
      "An android apps for monitoring a private event where each valid person can only have one ticket.",
    techStack: ["Android", "Firebase", "Kotlin", "Mobile App"],
    githubLink: "https://github.com/brandontanzhirong/MyEventBrite",
  },
  {
    title: "My Digit Span",
    description: "Flutter Apps for Digit Span Memory Test",
    techStack: ["Flutter", "Mobile App"],
    githubLink: "https://github.com/brandontanzhirong/My_Digit_Span",
  },
  {
    title: "Self Enrichment App",
    description:
      "An android App that helps people to improve mentally and physically",
    techStack: ["Android", "Firebase", "Java", "Mobile App"],
    githubLink: "https://github.com/brandontanzhirong/Self-Enrichment_App",
  },
  {
    title: "Bond Price Forecasting",
    description: "Forecast next month's bond price given current month details",
    techStack: [
      "Finance",
      "Deep Learning",
      "Microsoft Azure AutoML",
      "PowerBI",
      "Python",
    ],
    githubLink: "https://github.com/brandontanzhirong/bond-price-forcasting",
  },
  {
    title: "NotGit",
    description: "It is a clone of Git",
    techStack: ["Java"],
    githubLink: "https://github.com/brandontanzhirong/NotGit",
  },
  {
    title: "Bank Chatbot",
    description:
      "A chatbot that uses BERT model to match user question to the most relevant question in the database.",
    techStack: ["NLP", "Python", "Deep Learning", "BERT"],
    githubLink: "https://github.com/brandontanzhirong/NLP-bank-chatbot",
  },
  {
    title: "Self Love App",
    description:
      "A machine learning model that can predict suitable hobbies based on one's personality.",
    techStack: ["Machine Learning", "Deep Learning", "EDA", "Python"],
    githubLink: "https://github.com/brandontanzhirong/Self_Love_App",
  },
  {
    title: "Social Distancing Detection",
    description: "People Detection and distance estimation between people.",
    techStack: ["Deep Learning", "Python", "Computer Vision"],
    githubLink:
      "https://github.com/brandontanzhirong/Social_Distancing_Detection",
  },
  {
    title: "Online Portfolio",
    description: "Personal web-based portfolio.",
    techStack: [
      "Web Development",
      "ReactJS",
      "CSS",
      "JavaScript",
      "HTML",
      "Material UI",
    ],
    githubLink:
      "https://github.com/brandontanzhirong/brandontanzhirong.github.io",
  },
  {
    title: "Learning-based Multi-view 3D Model Reconstruction",
    description: "Building a 3D Model with multiple images.",
    techStack: [
      "Deep Learning",
      "Python",
      "Computer Vision",
      "Web Development",
      "ReactJS",
      "CSS",
      "JavaScript",
      "HTML",
    ],
    githubLink:
      "https://github.com/brandontanzhirong/Learning-based-Multi-view-3D-Model-Reconstruction",
  },
  {
    title: "Identity Verification with Masked Face",
    description:
      "Transfer Learning by retraining the pre-trained FaceNet on vggface2 with Real-World-Masked-Face-Dataset",
    techStack: ["Deep Learning", "Python", "Computer Vision"],
    githubLink:
      "https://github.com/brandontanzhirong/Identity-Verification-with-Masked-Face",
  },
  {
    title: "Deep Learning-based Paraphrase Generation",
    description:
      "Paraphrasing tool finetuned on pre-trained T5 model with Quora Question Pairs",
    techStack: ["Deep Learning", "Python", "NLP", "T5", "TensorBoard"],
    githubLink:
      "https://github.com/brandontanzhirong/paraphrasing-tool_t5-finetuned-QQP",
  },
];

let filteredTechStacks = {};
for (let i = 0; i < projectList.length; i++) {
  for (let j = 0; j < projectList[i].techStack.length; j++) {
    filteredTechStacks[projectList[i].techStack[j]] = false;
  }
}
filteredTechStacks["Deep Learning"] = true;

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
                  <CustomProjectCard
                    title={project.title}
                    description={project.description}
                    techStack={project.techStack}
                    githubLink={project.githubLink}
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
