import {
  makeStyles,
  Box,
  Container,
  useTheme,
  useMediaQuery,
  Divider,
  Icon,
  CardMedia,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Collapse from "@material-ui/core/Collapse";
import Image from "next/image";
import React, { useState } from "react";
import {
  blue,
  green,
  grey,
  lightBlue,
  purple,
  yellow,
} from "@material-ui/core/colors";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    opacity: 0,
  },
  root: {
    margin: "auto",
    borderRadius: 0,
    boxShadow: theme.shadows[0],
    width: "100%",
    height: "50%",
    // [theme.breakpoints.up("sm")]: {
    //   width: 400,
    // },
    // [theme.breakpoints.up("md")]: {
    //   width: 500,
    // },
    [theme.breakpoints.up("md")]: {
      // width: 700,
      width: "90%",
      height: "45%",
    },
    [theme.breakpoints.up("lg")]: {
      // width: 700,
      width: "80%",
      height: "40%",
    },
  },
  image: {
    height: "50%",
    width: "100%",
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

function Project(props) {
  const { title, description, work, image, projectLink } = props;
  const [expanded, setExpanded] = useState(false);

  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesLGup = useMediaQuery(theme.breakpoints.up("lg"));
  const classes = useStyles();

  function handleExpand() {
    setExpanded(!expanded);
  }

  return (
    <Box display="flex" flexDirection="column" margin="auto" boxShadow={4}>
      <Card
        className={classes.root}
        classes={{ root: classes.root }}
        raised={false}
      >
        <CardMedia>
          <Image
            unsized
            quality={100}
            src={`/${image}`}
            alt="Project Photo"
            className={classes.image}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>

        <CardActions
          style={{ display: "flex", justifyContent: "space-between" }}
          disableSpacing
        >
          <div>
            <Button
              size="small"
              color="primary"
              component="a"
              target="_blank"
              rel="noopener"
              href={projectLink}
              style={{ textDecoration: "none" }}
            >
              Visit The Site
            </Button>
            <Button onClick={handleExpand} size="small" color="primary">
              Learn More
            </Button>
          </div>
          <IconButton
            aria-label="expand icon"
            onClick={handleExpand}
            component={Box}
            mr={2}
          >
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>More Details:</Typography>
            <Typography paragraph>{work}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
}

export default function Projects({ projects }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box id="mywork" component="section" className={classes.section}>
        <Container maxWidth="lg">
          <Typography
            className={classes.title}
            variant="h3"
            component={"h6"}
            gutterBottom
          >
            My <span className={classes.highlight}>Work</span>
          </Typography>
          <Grid container justify="space-evenly" spacing={4}>
            {projects.map((project) => (
              <Grid item key={project.title}>
                <Project
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  work={project.work}
                  projectLink={project.projectLink}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
}
