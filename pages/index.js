import React from "react";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import { makeStyles } from "@material-ui/core";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

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
      <Contact />
    </React.Fragment>
  );
}
