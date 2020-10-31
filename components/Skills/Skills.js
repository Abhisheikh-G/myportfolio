import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Image from "next/image";
import React from "react";

const useStyles = makeStyles((theme) => ({
  section: {
    width: "100%",
    height: "100%",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    opacity: 0,
  },
  skillBlock: {
    margin: theme.spacing(2),
    height: theme.spacing(22),
    width: theme.spacing(22),
    borderRadius: theme.spacing(20),
    transition: theme.transitions.create(["all"], {
      duration: theme.transitions.complex,
    }),
    color: (props) => props.textColor,
    backgroundColor: (props) => props.color,
    "&:hover": {
      backgroundColor: (props) => props.hover,
    },
    [theme.breakpoints.down("sm")]: {
      height: theme.spacing(16),
      width: theme.spacing(16),
    },
  },
  skillImg: {
    height: 72,
    width: 72,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      height: 64,
      width: 64,
    },
  },
  skillText: {
    fontSize: "1.25rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: ".9rem",
    },
  },
  title: {
    textAlign: "center",
    textTransform: "uppercase",
    color: theme.palette.primary.contrastText,
  },
  highlight: {
    color: theme.palette.secondary.main,
  },
}));

function SkillBlock(props) {
  const classes = useStyles(props);
  const { imgSrc, text, alt } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      className={classes.skillBlock}
    >
      <Image
        src={`/${imgSrc}`}
        height={72}
        width={72}
        className={classes.skillImg}
        alt={alt}
      />
      <Typography variant="h6" component={"p"} className={classes.skillText}>
        {text}
      </Typography>
    </Box>
  );
}

export default function Skills(props) {
  const classes = useStyles(props);
  const { skills } = props;

  return (
    <React.Fragment>
      <Box className={classes.section} component="section">
        <Container maxWidth="lg">
          <Typography
            className={classes.title}
            variant="h3"
            component={"p"}
            gutterBottom
          >
            My <span className={classes.highlight}>Skills</span>
          </Typography>
          <Grid container justify="space-evenly">
            {skills.map((skill) => (
              <Grid item key={skill.text}>
                <SkillBlock
                  color={skill.color}
                  hover={skill.hover}
                  text={skill.text}
                  textColor={skill.textColor}
                  imgSrc={skill.imgSrc}
                  alt={skill.alt}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
}
