import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import Color from "color";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function CustomProjectCard({
  title,
  description,
  techStack,
  githubLink,
}) {
  return (
    <CardActionArea
      sx={{
        width: "100%",
        borderRadius: "1.5rem",
        boxShadow: "0 8px 16px 0 #BDC9D7",
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
            variant={title.length >= 30 ? "h4" : "h3"}
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
            p: "1rem",
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
                sx={{
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  backgroundColor: "rgb(225 228 230)",
                }}
              />
            </Box>
          ))}
        </Box>
        <Button
          variant="text"
          target="_blank"
          href={githubLink}
          sx={{
            position: "absolute",
            bottom: "0.2rem",
            right: "-0.6rem",
            color: "white",
          }}
        >
          <GitHubIcon />
        </Button>
      </Box>
    </CardActionArea>
  );
}
