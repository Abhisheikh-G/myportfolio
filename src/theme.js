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
      main: "#000",
    },
    secondary: {
      main: yellow.A200,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#000",
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: "#f4f4f4",

        transition: "all 0.2s ease-in",
        "&:hover": {
          backgroundColor: yellow.A200,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
