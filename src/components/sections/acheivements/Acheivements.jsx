import Typography from "@mui/material/Typography";
import { Container, Stack } from "@mui/material";
import awsSolutionArchitect from "../../../assets/awsSolutionArchitect.png";
import awsDataAnalytics from "../../../assets/awsDataAnalytics.png";
import umhackathon from "../../../assets/umhackathon.jpg";
import microsoftDA100 from "../../../assets/microsoftDA100.png";
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
  {
    title: "Microsoft Certified: Power BI Data Analyst Associate",
    date: "Issued Mar 2022 - Expires Mar 2023",
    img: microsoftDA100,
    description: `On Feb 2022, I attended a 4 days of DA-100 : Analysing Data with Power BI course with Trainocate Malaysia.
    From the training programme, I was given a free exam voucher to take the exam.
    After a week of practices, I passed the exam with flying colour.`,
  },
  {
    title: "AWS Certified Data Analytics - Specialty",
    date: "Issued Jun 2023 - Expires Jun 2026",
    img: awsDataAnalytics,
    description: `I spent 2-3 months to study for this exam while coping with my current job workload.
    In the end, I passed the exam and learnt a lot on big data in the cloud environment.`,
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
        sx={{
          textAlign: "center",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
        }}
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
