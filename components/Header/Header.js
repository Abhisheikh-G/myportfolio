import { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
                <Tab label="Contact" />
                <Tab label="My Work" />
              </Tabs>
            </Hidden>
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  );
}
