import { Box, Stack, Button, Typography, Tooltip } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function ContactMe() {
  return (
    <Box
      id="contactMe"
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#000000",
        color: "#FFFFFF",
        height: "15vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" sx={{ paddingBottom: "0.5%" }}>
        Feel free to connect with me
      </Typography>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Button
          variant="text"
          color="inherit"
          target="_blank"
          href="https://github.com/brandontanzhirong"
        >
          <GitHubIcon />
        </Button>
        <Button
          variant="text"
          color="inherit"
          target="_blank"
          href="https://www.linkedin.com/in/brandontanzhirong"
        >
          <LinkedInIcon />
        </Button>
        <Tooltip title="brandontan99@ymail.com">
          <Button
            variant="text"
            color="inherit"
            target="_blank"
            href="mailto:brandontan99@ymail.com"
          >
            <EmailIcon />
          </Button>
        </Tooltip>
      </Stack>
    </Box>
  );
}
