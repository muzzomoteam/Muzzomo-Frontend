import { createTheme } from "@mui/material/styles";

// TODO Investigate variable fonts and if they may be used for better performance

const themeOptions = {
  palette: {
    primary: {
      main: "#002e33",
    },
    secondary: {
      main: "#ffc107",
    },
    text: {
      primary: "#002e33",
    },
    background: {
      default: "#d9f6ef",
    },
  },
  typography: {
    fontFamily: [
      "Poppins",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: "4rem",
    },
    h2: {
      fontSize: "3.5rem",
    },
    h3: {
      fontSize: "2.8rem",
    },
    h4: {
      fontSize: "2.125rem",
    },
    h5: {
      fontSize: "1.5rem",
    },
    h6: {
      fontSize: "1.25rem",
    },
  },
};

export default createTheme(themeOptions);
