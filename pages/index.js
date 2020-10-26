import React, { lazy, Suspense } from "react";
import { makeStyles } from "@material-ui/core";

const Hero = lazy(() => import("../components/Hero/Hero"));
const Skills = lazy(() => import("../components/Skills/Skills"));
const Projects = lazy(() => import("../components/Projects/Projects"));
const Contact = lazy(() => import("../components/Contact/Contact"));

export default function Index() {
  return (
    <React.Fragment>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </React.Fragment>
  );
}
