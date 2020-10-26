import React, { lazy, Suspense } from "react";
import Hero from "../components/Hero/Hero";
import { makeStyles } from "@material-ui/core";

const Skills = lazy(() => import("../components/Skills/Skills"));
const Projects = lazy(() => import("../components/Projects/Projects"));
const Contact = lazy(() => import("../components/Contact/Contact"));

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
