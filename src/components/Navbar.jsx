import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  {
    sectionName: "Home",
    href: "#home",
  },
  {
    sectionName: "Projects",
    href: "#projects",
  },
  {
    sectionName: "Timeline",
    href: "#timeline",
  },
  {
    sectionName: "Acheivements",
    href: "#acheivements",
  },
  {
    sectionName: "Contact",
    href: "#contactMe",
  },
];

export default function Navbar() {
  const [isOpen, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#000000",
          height: "65px",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            color="inherit"
            sx={{
              textAlign: "left",
              flexGrow: 1,
              fontWeight: "700",
              textTransform: "uppercase",
            }}
          >
            Brandon Tan Zhirong
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((navItem) => (
              <Button color="inherit" href={navItem.href}>
                {navItem.sectionName}
              </Button>
            ))}
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(!isOpen)}
            sx={{ display: { xs: `inline`, md: `none` } }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            hideBackdrop
            anchor="top"
            open={isOpen}
            onClose={toggleDrawer(false)}
          >
            <Toolbar />
            <Box onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
              <List dense sx={{ backgroundColor: "#000000" }}>
                {navItems.map((navItem) => (
                  <ListItem
                    component="a"
                    color="inherit"
                    key={navItem.sectionName}
                    href={navItem.href}
                  >
                    <ListItemText
                      primary={navItem.sectionName}
                      sx={{ color: "#FFFFFF" }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
    </>
  );
}
