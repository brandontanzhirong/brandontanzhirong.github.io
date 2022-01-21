import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Container, Stack, Typography } from "@mui/material";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";

export default function CustomTimelineItem({
  title,
  place,
  startDate,
  endDate,
  description,
  isEducation,
  result = null,
}) {
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
}
