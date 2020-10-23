import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import Link from "../src/Link";
import { Grid, makeStyles } from "@material-ui/core";
import Projects from "../components/Projects/Projects";

const useStyles = makeStyles((theme) => ({
  image: {
    objectFit: "cover",
    opacity: "0.4",
  },
  imageContainer: {
    background: "#000",
  },
  section: {
    minHeight: "100vh",
    minWidth: "100%",
  },
  lightBg: {
    backgroundColor: theme.palette.primary.light,
    color: "#fff",
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Hero />
      <Skills />
      <Projects />
    </React.Fragment>
  );
}
