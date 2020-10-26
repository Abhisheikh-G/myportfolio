import React, { useState, lazy } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Link from "../../src/Link";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import Divider from "@material-ui/core/Divider";

const List = lazy(() => import("@material-ui/core/List"));
const ListItem = lazy(() => import("@material-ui/core/ListItem"));
const ListItemIcon = lazy(() => import("@material-ui/core/ListItemIcon"));
const ListItemText = lazy(() => import("@material-ui/core/ListItemText"));
const MailIcon = lazy(() => import("@material-ui/icons/Mail"));
const WorkIcon = lazy(() => import("@material-ui/icons/Work"));

const SwipeableDrawer = lazy(() => import("@material-ui/core/SwipeableDrawer"));

import clsx from "clsx";

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
    margin: theme.spacing(2),
    cursor: "pointer",
    position: "sticky",
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
    margin: theme.spacing(2),
    marginLeft: theme.spacing(6),
    height: 125,
    width: 125,
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
          <img
            style={{ margin: "auto" }}
            src="logo.svg"
            alt="logo"
            className={classes.logo}
          />
        </ListItem>
        <Divider />
        <ListItem
          className={drawerLink}
          component={Link}
          href="#contact"
          button
          key={"contact"}
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
            <img src="logo.svg" alt="logo" className={classes.logo} />

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
