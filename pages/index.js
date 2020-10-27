import React, { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import { makeStyles, Box } from "@material-ui/core";
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
  active: {
    opacity: 1,
    marginTop: theme.spacing(2),
    transition: "all .7s ease-in-out",
  },
  inactive: {
    opacity: 0,
    transition: "all .7s ease-in-out",
  },
}));

export default function Index() {
  const classes = useStyles();

  let options = {
    root: null,
    threshold: 0.1,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(isTouching, options);

    window.document
      .querySelectorAll(".container section")
      .forEach((section) => {
        observer.observe(section);
      });

    function isTouching(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.className = " " + classes.active;
          console.log(entry.target);
        } else {
          entry.target.className = "";
          entry.target.className = " " + classes.inactive;
        }
      });
    }
  }, []);

  return (
    <React.Fragment>
      <Box className="container">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </Box>
    </React.Fragment>
  );
}
