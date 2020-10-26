import React from "react";
import Hero from "../components/Hero/Hero";
import { makeStyles } from "@material-ui/core";
import dynamic from "next/dynamic";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Skills from "../components/Skills/Skills";

// const Projects = dynamic(() => import("../components/Projects/Projects"), {
//   ssr: false,
//   loading: () => <p>...</p>,
// });

// const Contact = dynamic(() => import("../components/Contact/Contact"), {
//   ssr: false,
//   loading: () => <p>...</p>,
// });

// const Skills = dynamic(() => import("../components/Skills/Skills"), {
//   ssr: false,
//   loading: () => <p>...</p>,
// });

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
