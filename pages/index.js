import React from "react";
import Hero from "../components/Hero/Hero";
import { makeStyles } from "@material-ui/core";
import dynamic from "next/dynamic";

const Projects = dynamic(() => import("../components/Projects/Projects"), {
  loading: () => <p>...</p>,
});

const Contact = dynamic(() => import("../components/Contact/Contact"), {
  loading: () => <p>...</p>,
});

const Skills = dynamic(() => import("../components/Skills/Skills"), {
  loading: () => <p>...</p>,
});

const DynamicComponentWithCustomLoading = dynamic(
  () => import("../components/hello"),
  { loading: () => <p>...</p> }
);

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
