import { makeStyles } from "@material-ui/core";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import PillButton from "../PillButton/PillButton";
import React from "react";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },

  title: {
    textAlign: "center",
    textTransform: "uppercase",
    color: theme.palette.primary.contrastText,
  },
  highlight: {
    color: theme.palette.secondary.main,
  },
  textfield: {
    width: "100%",
    margin: theme.spacing(1),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.common.white,
    zIndex: 10,
    padding: theme.spacing(2),
    margin: "auto",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      width: "85%",
    },
  },
}));

export default function Contact() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box id="contact" className={classes.section}>
        <Container maxWidth="lg">
          <Typography
            className={classes.title}
            variant="h3"
            component={"h6"}
            gutterBottom
          >
            Interested In Working With Me? <br />
            <span className={classes.highlight}>Send Me A Message</span>
          </Typography>
          <Box
            component="form"
            className={classes.form}
            boxShadow={8}
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              className={classes.textfield}
              type="text"
              label="Name"
              name="name"
              placeholder="Type your name here.."
              inputRef={register({ required: true, maxLength: 80 })}
            />
            <TextField
              className={classes.textfield}
              type="text"
              placeholder="Type your email here.."
              name="email"
              label="Email"
              inputRef={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            <TextField
              className={classes.textfield}
              multiline
              name="message"
              label="Message"
              placeholder="Type your message here.."
              inputRef={register({ required: true, maxLength: 300 })}
            />

            <PillButton type="submit" text="submit" />
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}
