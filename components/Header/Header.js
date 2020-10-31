import React, { useState, lazy } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Link from "../../src/Link";
import Hidden from "@material-ui/core/Hidden";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import WorkIcon from "@material-ui/icons/Work";
import clsx from "clsx";
import Image from "next/image";
import { Box, Typography, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  list: {
    width: 240,

    backgroundColor: theme.palette.common.black,
  },
  menuIcon: {
    height: 48,
    width: 48,
    marginLeft: "auto",
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    cursor: "pointer",
    position: "sticky",
    [theme.breakpoints.down("xs")]: {
      height: 38,
      width: 38,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
  },
  toolbarBg: {
    backgroundColor: theme.palette.primary.dark,
  },
  link: {
    textDecoration: "none",
    color: theme.palette.common.white,
    "&:hover": {
      textDecoration: "none",
    },
  },
  drawerLink: {
    color: theme.palette.common.white,
  },
  drawerIcon: {
    color: theme.palette.common.white,
  },
  drawerHeader: {
    height: 150,
  },
  drawer: {
    backgroundColor: theme.palette.common.black,
    borderRight: `1px solid ${theme.palette.secondary.main}`,
  },
  logo: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(6),
  },
  headerTitle: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(1),
      fontSize: "1.5rem",
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const drawerLink = clsx([classes.tab, classes.drawerLink, classes.link]);

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const list = () => (
    <React.Fragment>
      <List className={classes.list}>
        <ListItem className={classes.drawerHeader}>
          <Image
            className={classes.logo}
            src="/logo.svg"
            alt="logo"
            priority
            height={125}
            width={125}
          />
        </ListItem>
        <Divider />
        <ListItem
          className={drawerLink}
          component={Link}
          href="#contact"
          button
          key={"contact"}
          onClick={() => setOpen(!open)}
        >
          <ListItemIcon>
            <MailIcon className={classes.drawerIcon} />
          </ListItemIcon>
          <ListItemText primary={"Contact Me"} />
        </ListItem>
      </List>
      <Divider />
      <List className={classes.list}>
        <ListItem
          className={drawerLink}
          component={Link}
          href="#mywork"
          button
          key={"mywork"}
          onClick={() => setOpen(!open)}
        >
          <ListItemIcon>
            <WorkIcon className={classes.drawerIcon} />
          </ListItemIcon>
          <ListItemText primary={"My Work"} />
        </ListItem>
      </List>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar
            className={classes.toolbar}
            classes={{ root: classes.toolbarBg }}
            disableGutters
          >
            <Box ml={1} mt={1}>
              <Image
                priority
                src="/logo.svg"
                alt="logo"
                height={125}
                width={125}
              />
            </Box>
            <Typography
              variant={"h3"}
              component="div"
              className={classes.headerTitle}
              color="secondary"
              gutterBottom={false}
            >
              WEB DEVELOPMENT & DESIGN
            </Typography>
            <Hidden smDown>
              <Tabs
                value={value}
                style={{ marginLeft: "auto" }}
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <Tab
                  component={Link}
                  href="#contact"
                  className={classes.link}
                  label="Contact"
                />
                <Tab
                  component={Link}
                  href="#mywork"
                  className={classes.link}
                  label="My Work"
                />
              </Tabs>
            </Hidden>

            <Hidden mdUp>
              <MenuIcon
                className={classes.menuIcon}
                onClick={() => setOpen(!open)}
              />
              <SwipeableDrawer
                open={open}
                classes={{ paper: classes.drawer }}
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
              >
                {list()}
              </SwipeableDrawer>
            </Hidden>
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  );
}
