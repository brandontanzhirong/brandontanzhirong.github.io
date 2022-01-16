import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import WorkTwoToneIcon from "@mui/icons-material/WorkTwoTone";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const steps = [
  {
    title: "Data Engineer Intern",
    place: "Axrail Pte. Ltd.",
    isEducation: false,
    startDate: "Jul 2020",
    endDate: "Jan 2021",
    description: `1. Utilize a pre-trained SSD-MobileNet model to detect theft action in the CCTV footage
    2. Utilize several AWS services to complete the task using Python as the Programming Language such as:
    • ECS (Elastic Container Service), ELB (Elastic Load Balancer) and API Gateway to be able to run the code with 0 Cold Start time
    • S3, AWS Glue and AWS Firehose to able to query the log using AWS Athena
    • AWS EC2 and AWS X-Ray to run the cron job (batch job)
    • AWS SES (Simple Email Service) to send email to alert the recipient when a certain event occurs
    • AWS CodeCommit and AWS CodePipeline to perform CI/CD operations`,
  },
  {
    title: "Teaching Assistant (Fundamental of Programming & Data Structure)",
    place: "University of Malaya",
    isEducation: false,
    startDate: "Sep 2019",
    endDate: "Jun 2020",
    description: `• Explain the lab questions to the students 
    • Provide guidance to students when they need help`,
  },
  {
    title: "Bachelor of Computer Science (Artificial Intelligence)",
    place: "University of Malaya",
    isEducation: true,
    startDate: "Sep 2018",
    endDate: "Feb 2022",
    description: `International Student Centre Global Buddies (Committee)
    • facilitate exchange students by guiding and helping them throughout their semester in UM
    • facilitator for ASTW 2019 (short term exchange program in UM)
    • In charge of Annual Gala Dinner Registration
    • General Affair for Exchange Students Orientation  
   Teaching Assistant for Fundamental of Programming and Data Structure
   Volleyball (4th Place in intra-university)
   Dayao UM (Multech)
   Pesta Tanglung UM (Multimedia)`,
  },
  {
    title: "Local Matriculation (Science Stream)",
    place: "Kolej Matrikulasi Johor (KMJ)",
    isEducation: true,
    startDate: "Jun 2017",
    endDate: "May 2018",
    description: `Volleyball (Team Captain & 3rd place in inter-college competition)
    Class monitor
    Assistant head of Block A first floor 
    Fun Fair Drinks Department
    Performer (Wushu)`,
  },
  {
    title: "SPM (Science Stream)",
    place: "SMK Bandar Sri Damansara 1",
    isEducation: true,
    startDate: "Jan 2011",
    endDate: "Dec 2016",
    description: `• Explain the lab questions to the students 
    • Provide guidance to students when they need help`,
  },
];

const CustomTimelineItem = ({
  title,
  place,
  startDate,
  endDate,
  description,
  isEducation,
}) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        {startDate} - {endDate}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot>
          {isEducation ? <MenuBookTwoToneIcon /> : <WorkTwoToneIcon />}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography variant="h6" component="span" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom={true}>
          {place}
        </Typography>
        {description.split("\n").map((line) => (
          <Typography variant="body2">{line}</Typography>
        ))}
      </TimelineContent>
    </TimelineItem>
  );
};

export default function CustomTimeline() {
  return (
    <Box id="timeline" component="section">
      <h2>Timeline</h2>
      <Timeline>
        {steps.map((step) => (
          <CustomTimelineItem
            title={step.title}
            place={step.place}
            startDate={step.startDate}
            endDate={step.endDate}
            description={step.description}
            isEducation={step.isEducation}
          ></CustomTimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}
