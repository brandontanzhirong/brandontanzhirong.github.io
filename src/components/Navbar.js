import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useScrollTrigger } from "@mui/material";
import PropTypes from "prop-types";

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        <Button color="inherit" href="#introduction">
          Introduction
        </Button>
        <Button color="inherit" href="#projects">
          Projects
        </Button>
        <Button color="inherit" href="#timeline">
          Timeline
        </Button>
        <Button color="inherit" href="#acheivements">
          Acheivements
        </Button>
        <Button color="inherit" href="#contactMe">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}
