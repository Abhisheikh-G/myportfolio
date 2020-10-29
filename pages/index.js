import React, { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import { makeStyles, Box } from "@material-ui/core";
import dynamic from "next/dynamic";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Skills from "../components/Skills/Skills";
import dynamic from "next/dynamic";

const Fade = dynamic(() => import("@material-ui/core/Fade"));

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

export default function Index({ projects }) {
  const classes = useStyles();
  console.log("Index props: ", projects);

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
        <Fade in={true}>
          <Hero />
        </Fade>
        <Skills />
        <Projects projects={projects} />
        <Contact />
      </Box>
    </React.Fragment>
  );
}

export async function getStaticProps(context) {
  let res = await fetch("https://agill-portfolio.herokuapp.com/projects.json");
  let data = await res.json();
  const { projects } = data;

  return {
    props: {
      projects,
    },
  };
}
