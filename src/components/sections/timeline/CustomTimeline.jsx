import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import CustomTimelineItem from "./CustomTimelineItem";

const steps = [
  {
    title: "API Developer",
    place: "Singapore Telecommunications Limited (Singtel)",
    isEducation: false,
    startDate: "Aug 2023",
    endDate: "Present",
    description: `Enhanced existing Java Spring Boot API by integrating third party OAuth Mechanism and implementing circuit breaker pattern for the resilience of the microservice
    Deployed a Java Kubernetes application on OpenShift Container Platform through Jenkins CI/CD pipeline and Helm Charts`  
  },
  {
    title: "Data Engineer/Scientist",
    place: "Singapore Telecommunications Limited (Singtel)",
    isEducation: false,
    startDate: "Jul 2023",
    endDate: "Present",
    description: `Built and maintained 10+ ETL data pipelines to transform billions of raw records from several data sources using PySpark and feed the data to the marketing team for campaign purposes
    Implemented ML monitoring system to proactively address data quality issues that reduced the response time to 1 hour
    Automated basic email reports with Apache Airflow which saved 1 hour of manual work each day
    Modified the graph schema on graph database to analyse the data using Graph SQL in a unified view that reduce the analysis time by 2 hours
    Prepared, understand and analysed data from 20+ data sources with Tableau to identify trend and draw insights
    Discussed with project manager and analysts for data modelling in 10+ domains that boost the time in analysis by 50% 
    Collaborated with 2 cross-functional teams to understand and solve the root cause of the customer complaints 
    Documented the data dictionaries, domain knowledge and business logic of the data models`  
  },
  {
    title: "AI Research Scientist",
    place: "Fusionex Group",
    isEducation: false,
    startDate: "May 2023",
    endDate: "Jul 2023",
    description: `Built a blood test semi-automation system 
    ➼	Trained a deep learning classification model to identify good tiles from a whole slide image
    ➼	Segmented red and white blood cells from the medical image with the use of image processing techniques
    ➼	Annotated instance segmentation data for white blood cell and classification data for good tile and bad tile`,
  },
  {
    title: "Data Engineer Intern",
    place: "Axrail Pte. Ltd.",
    isEducation: false,
    startDate: "Jul 2020",
    endDate: "Jan 2021",
    description: `Developed theft detection in a CCTV footage with a pre-trained MobileNet SSD model 
    Implemented people counter in a shop in a day by detecting people with pre-trained MobileNet SSD model and tracking them using correlation filter and centroid tracking
    Utilize several AWS services to complete the task using Python as the Programming Language such as:
    ➼ ECS (Elastic Container Service), ELB (Elastic Load Balancer) and API Gateway to be able to run the code with 0 Cold Start time
    ➼ S3, AWS Glue and AWS Firehose to able to query the log using AWS Athena
    ➼ AWS EC2 and AWS X-Ray to run the cron job (batch job)
    ➼ AWS SES (Simple Email Service) to send email to alert the recipient when a certain event occurs
    ➼ AWS CodeCommit and AWS CodePipeline to perform CI/CD operations
    ➼ AWS Lambda and AWS Elasticsearch to retrieve a list of filtered products`,
  },
  {
    title: "Teaching Assistant (Java)",
    result: "Fundamental of Programming & Data Structure",
    place: "University of Malaya",
    isEducation: false,
    startDate: "Sep 2019",
    endDate: "Jun 2020",
    description: `Explained the weekly lab questions to a class of students 
    Provided guidance to the students when they needed assistance`,
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
  }
];

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
