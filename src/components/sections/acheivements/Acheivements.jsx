import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Container,
  Stack,
} from "@mui/material";
import awsSolutionArchitect from "../../../assets/awsSolutionArchitect.png";
import umhackathon from "../../../assets/umhackathon.jpg";

const acheivements = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    date: "Issued Feb 2021 - Expires Feb 2024",
    img: awsSolutionArchitect,
    description:
      "In my internship under Axrail Pte. Ltd. which is a AWS Advanced Consulting Partner company, I has passed this certification with months of hardwork.    ",
  },
  {
    title: "UMHackathon 2021",
    date: "Aug 2021",
    img: umhackathon,
    description: `My team and I have managed to acheive third place in the finance domain in this hackathon. 
    We trained a model to predict the next month's bond price given the current month's details by employing Microsoft Azure AutoML 
    and showcase our prototype in the form of PowerBI with the help of prototyping tool(Streamlit).`,
  },
];

const AcheivementItem = ({ title, date, img, description }) => {
  return (
    <Card
      sx={{
        boxShadow: "0 8px 16px 0 #BDC9D7",
        margin: "2rem",
        maxWidth: 450,
        borderRadius: "1.5rem",
        textAlign: "center",
      }}
    >
      <CardMedia
        component="img"
        image={img}
        alt={title}
        sx={{
          width: "60%",
          margin: "auto",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h3" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        <Typography gutterBottom variant="h4" sx={{ fontWeight: 500 }}>
          {date}
        </Typography>
        <Typography
          variant="subtitle2"
          color="inherit"
          sx={{ fontWeight: 400 }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default function Acheivements() {
  return (
    <Container id="acheivements" component="section">
      <Typography variant="h2" sx={{ fontWeight: 700 }}>
        Acheivements
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ textAlign: "left", justifyContent: "space-evenly" }}
      >
        {acheivements.map((acheivement) => (
          <AcheivementItem
            title={acheivement.title}
            date={acheivement.date}
            img={acheivement.img}
            description={acheivement.description}
          />
        ))}
      </Stack>
    </Container>
  );
}
