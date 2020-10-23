import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pillButton: {
    height: 50,
    width: 125,
    borderRadius: theme.spacing(20),
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(2),
  },
}));

export default function PillButton({ text }) {
  const classes = useStyles();
  return (
    <Button variant="contained" className={classes.pillButton}>
      {text}
    </Button>
  );
}
