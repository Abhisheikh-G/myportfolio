import {
  makeStyles,
  Box,
  Container,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  section: {
    background: `linear-gradient( ${theme.palette.primary.light},${theme.palette.background.paper})`,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  root: {
    borderRadius: 0,
    boxShadow: theme.shadows[0],
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
  const classes = useStyles();
  return (
    <Box
      display="flex"
      flexDirection={matchesSM ? "column" : direction}
      width={matchesSM ? "100%" : "66%"}
      margin="auto"
      boxShadow={4}
    >
      <Box
        component="img"
        height={300}
        width={matchesSM ? "100%" : 250}
        src="bg.jpg"
        alt="Project Photo"
      />
      <Card
        className={classes.root}
        classes={{ root: classes.root }}
        raised="false"
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
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
    <Box className={classes.section}>
      <Container maxWidth="lg">
        <Typography className={classes.title} variant="h3" gutterBottom>
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
  );
}
