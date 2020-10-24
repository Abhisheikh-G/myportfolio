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
    background: `linear-gradient( ${theme.palette.background.paper}, ${theme.palette.primary.main})`,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },

  title: {
    textAlign: "center",
    textTransform: "uppercase",
    color: theme.palette.common.black,
  },
  highlight: {
    color: theme.palette.primary.dark,
  },
  textfield: {
    width: "100%",
    padding: theme.spacing(2),
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
          <Typography className={classes.title} variant="h3" gutterBottom>
            Interested In Working With Me? <br />
            <span className={classes.highlight}>Send Me A Message</span>
          </Typography>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            width="85%"
            alignItems="center"
            boxShadow={8}
            bgcolor="#fff"
            zIndex={10}
            p={4}
            m="auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              className={classes.textfield}
              type="text"
              placeholder="Your Name"
              name="Your Name"
              inputRef={register({ required: true, maxLength: 80 })}
            />
            <TextField
              className={classes.textfield}
              type="text"
              placeholder="Email"
              name="Email"
              inputRef={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            <TextField
              className={classes.textfield}
              multiline
              name="Message"
              placeholder="Your Message Here.."
              inputRef={register({ required: true, maxLength: 300 })}
            />

            <PillButton type="submit" text="submit" />
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}
