import React from "react";
import Color from "color";
import {
  Typography,
  Grid,
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Box,
  Container,
} from "@mui/material";
import ai from "../../../assets/ai.jpg";
import git from "../../../assets/git.png";
import lessonLearnt from "../../../assets/lessonsLearnt.jpg";
import mazeRunner from "../../../assets/mazeRunner.png";
import myDigitSpan from "../../../assets/myDigitSpan.jpeg";
import myEventBrite from "../../../assets/myEventBrite.jpeg";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const projectList = [
  {
    title: "Maze Runner",
    description: "A Java project",
    image: mazeRunner,
  },
  {
    title: "MyEventBrite",
    description:
      "An android apps for monitoring a private event where each valid person can only have one ticket.",
    image: myEventBrite,
  },
  {
    title: "My Digit Span",
    description: "Flutter Apps for Digit Span",
    image: myDigitSpan,
  },
  {
    title: "Self Enrichment App",
    description:
      "An android App that helps people to improve mentally and physically",
    image: lessonLearnt,
  },
  {
    title: "Bond Price Forecasting",
    description: "Forcast next month's bond price given current month details",
    image: ai,
  },
  {
    title: "NotGit",
    description: "It is a clone of Git",
    image: git,
  },
];

const CustomCard = ({ image, title, description }) => {
  return (
    <CardActionArea
      sx={{
        width: "100%",
        borderRadius: 16,
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
          width: 270,
          height: 300,
          borderRadius: 16,
          boxShadow: "none",
          "&:hover": {
            boxShadow: `0 6px 12px 0 ${Color("#203f52")
              .rotate(-12)
              .darken(0.2)
              .fade(0.5)}`,
          },
        }}
      >
        <CardMedia
          sx={{
            width: "100%",
            height: 0,
            paddingBottom: "65%",
            backgroundColor: "rgba(0, 0, 0, 0.08)",
          }}
          image={image}
        />
        <CardContent
          sx={{
            backgroundColor: "#203f52",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: 20,
              color: "#fff",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
            variant={"h2"}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              opacity: 0.87,
              marginTop: "0.2rem",
              fontSize: 14,
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

// export default React.memo(function Projects() {
//   return (
//     <Box id="projects" component="section" sx={{ height: "100vh" }}>
//       <h2>Projects</h2>
//       <Grid container>
//         <Grid item xs={2}></Grid>
//         <Grid xs={8} justifyContent="center" container item spacing={4}>
//           {projectList.map((project) => (
//             <Grid item>
//               <CustomCard
//                 title={project.title}
//                 description={project.description}
//                 image={project.image}
//               />
//             </Grid>
//           ))}
//         </Grid>
//         <Grid item xs={2}></Grid>
//       </Grid>
//     </Box>
//   );
// });

const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function Projects() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container id="projects" component="section" sx={{ width: "70%" }}>
      <Box>
        <h2>Projects</h2>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid xs={8} justifyContent="center" container item spacing={4}>
            {projectList.map(
              (project, index) =>
                Math.floor(index / 2) === activeStep && (
                  <Grid item>
                    <CustomCard
                      title={project.title}
                      description={project.description}
                      image={project.image}
                    />
                  </Grid>
                )
            )}
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Box>
      <MobileStepper
        variant="text"
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
