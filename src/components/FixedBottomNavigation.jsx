import * as React from "react";
import RestoreIcon from "@mui/icons-material/Restore";
import { Link } from "react-router-dom";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";

export default function FixedBottomNavigation() {
  const [selected, setSelected] = React.useState("introduction");

  return (
    <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        showLabels
        value={selected}
        onChange={(event, newValue) => {
          setSelected(newValue);
        }}
      >
        <BottomNavigationAction
          component={Link}
          to="/introduction"
          label="Intro"
          value="introduction"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/projects"
          label="Projects"
          value="projects"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/timeline"
          label="Timeline"
          value="timeline"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/acheivements"
          label="Acheivements"
          value="acheivements"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/contact-me"
          label="Contact"
          value="contact-me"
          icon={<RestoreIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
