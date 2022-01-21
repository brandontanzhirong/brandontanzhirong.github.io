import Typography from "@mui/material/Typography";
import { Container, Stack } from "@mui/material";
import awsSolutionArchitect from "../../../assets/awsSolutionArchitect.png";
import umhackathon from "../../../assets/umhackathon.jpg";
import AcheivementItem from "./AcheivementItem";

const acheivements = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    date: "Issued Feb 2021 - Expires Feb 2024",
    img: awsSolutionArchitect,
    description:
      "In my internship under Axrail Pte. Ltd. which is a AWS Advanced Consulting Partner company, I had passed this certification with months of hardwork.    ",
  },
  {
    title: "UMHackathon 2021",
    date: "Aug 2021",
    img: umhackathon,
    description: `My team and I had managed to acheive third place in the finance domain in this hackathon. 
    We trained a model to predict the next month's bond price given the current month's details by employing Microsoft Azure AutoML 
    and showcased our prototype in the form of PowerBI with the help of prototyping tool(Streamlit).`,
  },
];

export default function Acheivements() {
  return (
    <Container id="acheivements" component="section">
      <Typography
        variant="h2"
        sx={{ fontWeight: 700, paddingTop: "3rem", paddingBottom: "1.5rem" }}
      >
        Acheivements
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ textAlign: "left", justifyContent: "space-evenly" }}
      >
        {acheivements.map((acheivement) => (
          <AcheivementItem
            key={acheivement.title}
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
