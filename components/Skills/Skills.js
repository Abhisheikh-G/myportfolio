import {
  Box,
  colors,
  Container,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {
  blue,
  green,
  grey,
  lightBlue,
  lightGreen,
  purple,
  yellow,
} from "@material-ui/core/colors";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles((theme) => ({
  section: {
    background: `linear-gradient( ${theme.palette.primary.main},${theme.palette.primary.light})`,
    width: "100%",
    height: "100%",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
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
  const { imgSrc, text } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      className={classes.skillBlock}
    >
      <img src={imgSrc} className={classes.skillImg} />
      <Typography variant="h6" className={classes.skillText}>
        {text}
      </Typography>
    </Box>
  );
}

export default function Skills(...props) {
  const classes = useStyles(props);
  return (
    <React.Fragment>
      <Box className={classes.section}>
        <Container maxWidth="lg">
          <Typography className={classes.title} variant="h3" gutterBottom>
            My <span className={classes.highlight}>Skills</span>
          </Typography>
          <Grid container justify="space-evenly">
            <Grid item>
              <SkillBlock
                color={yellow[600]}
                hover={yellow[400]}
                text={"JavaScript"}
                textColor="#000"
                imgSrc="javascript.png"
              />
            </Grid>
            <Grid item>
              <SkillBlock
                color={blue[900]}
                hover={blue[800]}
                text={"React.js"}
                textColor="#fff"
                imgSrc="react.svg"
              />
            </Grid>

            <Grid item>
              <SkillBlock
                color={green[900]}
                hover={green[800]}
                text={"Node.js"}
                textColor="#fff"
                imgSrc="node.svg"
              />
            </Grid>
            <Grid item>
              <SkillBlock
                color={purple[500]}
                hover={purple[400]}
                text={"Gatsby.js"}
                textColor="#fff"
                imgSrc="gatsby.svg"
              />
            </Grid>
            <Grid item>
              <SkillBlock
                color={grey[400]}
                hover={grey[200]}
                text={"Next.js"}
                textColor="#000"
                imgSrc="next.svg"
              />
            </Grid>
            <Grid item>
              <SkillBlock
                color="#fff"
                hover={grey[400]}
                text={"Git"}
                textColor="#000"
                imgSrc="git.png"
              />
            </Grid>
            <Grid item>
              <SkillBlock
                color={green[400]}
                hover={green[300]}
                text={"MongoDB"}
                textColor="#000"
                imgSrc="mongo.png"
              />
            </Grid>
            <Grid item>
              <SkillBlock
                color={lightBlue[900]}
                hover={lightBlue[800]}
                text={"PostgreSQL"}
                textColor="#fff"
                imgSrc="postgresql.svg"
              />
            </Grid>
            <Grid item>
              <SkillBlock
                color="#fff"
                hover={grey[400]}
                text={"Linux"}
                textColor="#000"
                imgSrc="tux.svg"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
}
