import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    background: {
      default: "#e5e5e5",
    },
    primary: {
      main: "#0288d1",
    },
    secondary: {
      main: "#9c27b0",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.3rem",
      fontWeight: "bold",
    },
  },
});
