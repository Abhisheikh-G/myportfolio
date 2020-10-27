import {
  makeStyles,
  Box,
  Container,
  useTheme,
  useMediaQuery,
  Divider,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React from "react";

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
    [theme.breakpoints.up("lg")]: {
      width: "80%",
      height: "40%",
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

function Project(props) {
  const { direction } = props;
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesLGup = useMediaQuery(theme.breakpoints.up("lg"));
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" margin="auto" boxShadow={4}>
      <Box
        component="img"
        src="bg.webp"
        alt="Project Photo"
        m="auto"
        width={matchesLGup ? "80%" : "100%"}
        height={matchesLGup ? "40%" : "50%"}
      />
      <Card
        className={classes.root}
        classes={{ root: classes.root }}
        raised={false}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Project
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default function Projects() {
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
            <Grid item>
              <Project />
            </Grid>
            <Grid item>
              <Project direction="row-reverse" />
            </Grid>
            <Grid item>
              <Project />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
}
