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
import ai from "../../assets/ai.jpg";
import git from "../../assets/git.png";

const projectList = [
  {
    title: "Maze Runner",
    description: "A Java project",
    image:
      "https://github.com/brandontanzhirong/MazeRunner/raw/master/screenshots/Maze.png",
  },
  {
    title: "MyEventBrite",
    description:
      "An android apps for monitoring a private event where each valid person can only have one ticket.",
    image:
      "https://github.com/brandontanzhirong/MyEventBrite/raw/master/screenshots/Attending.jpeg",
  },
  {
    title: "My Digit Span",
    description: "Flutter Apps for Digit Span",
    image:
      "https://github.com/brandontanzhirong/My_Digit_Span/raw/master/Screenshots/Home%20Page.jpeg",
  },
  {
    title: "Self Enrichment App",
    description:
      "An android App that helps people to improve mentally and physically",
    image:
      "https://github.com/brandontanzhirong/Self-Enrichment_App/raw/master/screenshots/lessonsLearnt.jpg",
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
              fontFamily: "Keania One",
              fontSize: 20,
              color: "#fff",
              textTransform: "uppercase",
            }}
            variant={"h2"}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat",
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

export default React.memo(function Projects() {
  return (
    <Grid container>
      <Grid item xs={2}></Grid>
      <Grid xs={8} justifyContent="center" container item spacing={4}>
        {projectList.map((project) => (
          <Grid item>
            <CustomCard
              title={project.title}
              description={project.description}
              image={project.image}
            />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
});
