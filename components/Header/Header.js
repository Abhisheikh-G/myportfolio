import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  list: {
    width: 240,
  },
  menuIcon: {
    height: 48,
    width: 48,
    marginLeft: "auto",
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
  tab: {
    textDecoration: "none",
    color: theme.palette.common.white,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const list = () => (
    <React.Fragment>
      <List className={classes.list}>
        <ListItem button key={"mail"}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"mail"} />
        </ListItem>
      </List>
      <Divider />
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
            <Hidden smDown>
              <Tabs
                value={value}
                style={{ width: 400, marginLeft: "auto" }}
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <Tab
                  component={Link}
                  href="#contact"
                  className={classes.tab}
                  label="Contact"
                />
                <Tab
                  component={Link}
                  href="#mywork"
                  className={classes.tab}
                  label="My Work"
                />
              </Tabs>
            </Hidden>

            <Hidden smUp>
              <MenuIcon
                className={classes.menuIcon}
                onClick={() => setOpen(!open)}
              />
              <SwipeableDrawer
                open={open}
                className={classes.drawer}
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
              >
                {list}
              </SwipeableDrawer>
            </Hidden>
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  );
}
