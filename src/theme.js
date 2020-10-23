import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import {
  red,
  blueGrey,
  yellow,
  grey,
  pink,
  teal,
  blue,
  cyan,
  lightBlue,
} from "@material-ui/core/colors";

// Create a theme instance.
let theme = createMuiTheme({
  palette: {
    primary: {
      main: lightBlue[800],
    },
    secondary: {
      main: cyan.A200,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        "&:hover": {
          backgroundColor: lightBlue[600],
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
