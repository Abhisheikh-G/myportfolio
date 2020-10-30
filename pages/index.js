import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import { makeStyles, Box } from "@material-ui/core";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Skills from "../components/Skills/Skills";

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

export default function Index({ projects, skills }) {
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
        <Skills skills={skills} />
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

  res = await fetch("https://agill-portfolio.herokuapp.com/skills.json");
  data = await res.json();
  const { skills } = data;

  return {
    props: {
      projects,
      skills,
    },
  };
}
