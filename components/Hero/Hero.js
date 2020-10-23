import {
  makeStyles,
  Container,
  Typography,
  Box,
  Button,
  Avatar,
  Divider,
} from "@material-ui/core";
import PillButton from "../PillButton/PillButton";

const useStyles = makeStyles((theme) => ({
  highlight: {
    color: theme.palette.secondary.main,
  },
  content: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    textTransform: "uppercase",
    background: `linear-gradient( ${theme.palette.primary.dark},${theme.palette.primary.main})`,
    color: theme.palette.primary.contrastText,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  title: {
    textAlign: "center",
  },
  avatarLarge: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(1),
  },
}));

export default function Hero() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.content}>
        <Container maxWidth="lg">
          <Typography className={classes.title} variant="h2" gutterBottom>
            Looking For A{" "}
            <span className={classes.highlight}>Web Developer?</span>
          </Typography>
          <Typography variant="h3" gutterBottom={true} align="center">
            Hi, I'm <span className={classes.highlight}>Abhisheikh Gill.</span>
          </Typography>
          <Box width={"50%"} m="auto">
            <Typography variant="subtitle1" gutterBottom={true} align="center">
              Nice to meet you, I'm a{" "}
              <span className={classes.highlight}>
                full stack web developer
              </span>{" "}
              living in New Jersey, USA. I make applications using{" "}
              <span className={classes.highlight}>
                React.js, Next.js, Gatsby.js, Node.js, PostgreSQL and MongoDB.
              </span>
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <PillButton text="Contact Me" />
            <PillButton text="My Work" />
          </Box>
        </Container>
      </Box>
      <Divider />
    </React.Fragment>
  );
}
