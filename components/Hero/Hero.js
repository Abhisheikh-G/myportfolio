import {
  makeStyles,
  Container,
  Typography,
  Box,
  Button,
  Avatar,
  Divider,
} from "@material-ui/core";
import PillButton from "../PillButton/PillButton";
import React, { useState } from "react";
import Link from "../../src/Link";
import Typist from "react-typist";
import dynamic from "next/dynamic";

const Fade = dynamic(() => import("@material-ui/core/Fade"));

const useStyles = makeStyles((theme) => ({
  highlight: {
    color: theme.palette.secondary.main,
  },

  content: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    textTransform: "uppercase",
    background: `linear-gradient( ${theme.palette.primary.dark},${theme.palette.primary.main})`,
    color: theme.palette.primary.contrastText,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(6),
  },
  title: {
    textAlign: "left",
  },
  avatarLarge: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(1),
  },
  link: {
    textDecoration: "none",
    color: theme.palette.common.white,
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function Hero() {
  const classes = useStyles();
  const [title, setTitle] = useState(false);
  const [body, setBody] = useState(false);
  return (
    <React.Fragment>
      <Box className={classes.content}>
        <Container maxWidth="lg">
          <Typist
            avgTypingDelay={70}
            cursor={{ hideWhenDone: true, show: false }}
            onTypingDone={() => setTitle(true)}
          >
            <Typography
              align="left"
              className={classes.title}
              variant="h2"
              gutterBottom
            >
              Looking For A <br />
              <span className={classes.highlight}>Web Developer?</span>
            </Typography>
          </Typist>

          <Fade
            in={title}
            timeout={{ enter: 1000, exit: 1000 }}
            onEntered={() => setBody(true)}
          >
            <Typography variant="h3" gutterBottom={true} align="left">
              Hello, my name is
              <br />
              <span className={classes.highlight}>Abhisheikh Gill.</span>
            </Typography>
          </Fade>
          <Fade in={body} timeout={{ enter: 1000, exit: 1000 }}>
            <Typography
              variant="h5"
              component={"p"}
              gutterBottom={true}
              align="left"
            >
              Nice to meet you, I'm a{" "}
              <span className={classes.highlight}>
                full stack web developer
              </span>{" "}
              living in New Jersey, USA. I make applications using{" "}
              <span className={classes.highlight}>
                React.js, Next.js, Gatsby.js, Node.js, PostgreSQL and MongoDB.
              </span>
            </Typography>
          </Fade>
          <Box display="flex" justifyContent="center">
            <Link href="#contact" className={classes.link}>
              <PillButton text="Contact Me" />
            </Link>
            <Link href="#mywork" className={classes.link}>
              <PillButton text="My Work" />
            </Link>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}
