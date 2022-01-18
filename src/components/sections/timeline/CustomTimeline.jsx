import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import Typography from "@mui/material/Typography";
import { Container, Stack, Box } from "@mui/material";
import { TimelineOppositeContent } from "@mui/lab";

const steps = [
  {
    title: "Data Engineer Intern",
    place: "Axrail Pte. Ltd.",
    isEducation: false,
    startDate: "Jul 2020",
    endDate: "Jan 2021",
    description: `Theft Detection in a CCTV footage with a pre-trained MobileNet SSD model
    People counter in a shop in a day by detecting people with pre-trained MobileNet SSD model and tracking them using correlation filter and centroid tracking
    Utilize several AWS services to complete the task using Python as the Programming Language such as:
    ➼ ECS (Elastic Container Service), ELB (Elastic Load Balancer) and API Gateway to be able to run the code with 0 Cold Start time
    ➼ S3, AWS Glue and AWS Firehose to able to query the log using AWS Athena
    ➼ AWS EC2 and AWS X-Ray to run the cron job (batch job)
    ➼ AWS SES (Simple Email Service) to send email to alert the recipient when a certain event occurs
    ➼ AWS CodeCommit and AWS CodePipeline to perform CI/CD operations`,
  },
  {
    title: "Teaching Assistant (Fundamental of Programming & Data Structure)",
    place: "University of Malaya",
    isEducation: false,
    startDate: "Sep 2019",
    endDate: "Jun 2020",
    description: `Explain the lab questions to the students 
    Provide guidance to students when they need help`,
  },
  {
    title: "Bachelor of Computer Science (Artificial Intelligence)",
    result: "CGPA3.98",
    place: "University of Malaya",
    isEducation: true,
    startDate: "Sep 2018",
    endDate: "Feb 2022",
    description: `International Student Centre Global Buddies (Committee)
    ➼ Facilitate exchange students by guiding and helping them throughout their semester in UM
    ➼ Facilitator for ASTW 2019 (short term exchange program in UM)
    ➼ In charge of Annual Gala Dinner Registration
    ➼ General Affair for Exchange Students Orientation  
    Teaching Assistant for Fundamental of Programming and Data Structure
    Volleyball (4th Place in intra-university)
    Dayao UM (Multech)
    Pesta Tanglung UM (Multimedia)`,
  },
  {
    title: "Local Matriculation (Science Stream)",
    result: "CGPA4.00",
    place: "Kolej Matrikulasi Johor (KMJ)",
    isEducation: true,
    startDate: "2017",
    endDate: "2018",
    description: `Volleyball (Team Captain & 3rd place in inter-college competition)
    Class monitor
    Assistant head of Block A first floor 
    Fun Fair Drinks Department
    Performer (Wushu)`,
  },
  {
    title: "SPM (Science Stream)",
    result: "6A+ 3A 1A- 1B+",
    place: "SMK Bandar Sri Damansara 1",
    isEducation: true,
    startDate: "2011",
    endDate: "2016",
    description: `Red Crescent Society - Vice President
    Red Crescent Camp - Organizer
    Green House Marching - Commander`,
  },
];

const CustomTimelineItem = ({
  title,
  place,
  startDate,
  endDate,
  description,
  isEducation,
  result = null,
}) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        style={{ maxWidth: "1px", paddingLeft: "0px", paddingRight: "0px" }}
      />
      <TimelineSeparator>
        <TimelineDot variant="outlined" sx={{ borderColor: "#000000" }}>
          {isEducation ? <MenuBookRoundedIcon /> : <WorkOutlineRoundedIcon />}
        </TimelineDot>
        <TimelineConnector sx={{ backgroundColor: "#000000", width: "1px" }} />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 0 }}>
        <Stack direction={{ xs: "column", md: "row" }}>
          <Container sx={{ flex: 1 }}>
            <Typography variant="h5" component="span" fontWeight="700">
              {title}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
              {result}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
              {place}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "400", fontStyle: "italic" }}
            >
              {startDate} - {endDate}
            </Typography>
          </Container>
          <Container sx={{ flex: 2 }}>
            <ul>
              {description.split("\n").map((line) =>
                !line.includes("➼") ? (
                  <Box component="li" key={line}>
                    <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
                      {line}
                    </Typography>
                  </Box>
                ) : (
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "500" }}
                    key={line}
                  >
                    {line}
                  </Typography>
                )
              )}
            </ul>
          </Container>
        </Stack>
      </TimelineContent>
    </TimelineItem>
  );
};

export default function CustomTimeline() {
  return (
    <Container id="timeline" component="section" sx={{ padding: 0 }}>
      <Typography
        variant="h2"
        sx={{ paddingTop: "3rem", paddingBottom: "1.5rem", fontWeight: 700 }}
      >
        Experience and Education
      </Typography>
      <Timeline sx={{ padding: 0 }}>
        {steps.map((step) => (
          <CustomTimelineItem
            key={step.title}
            title={step.title}
            result={step.result}
            place={step.place}
            startDate={step.startDate}
            endDate={step.endDate}
            description={step.description}
            isEducation={step.isEducation}
          ></CustomTimelineItem>
        ))}
      </Timeline>
    </Container>
  );
}
