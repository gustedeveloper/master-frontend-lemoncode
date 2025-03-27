import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    background: {
      default: "white",
    },
    primary: {
      main: "#354f52",
    },
    secondary: {
      main: "#84a98c",
      light: "#cad2c5",
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
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      },
    },
  },
});
