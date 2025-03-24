import { createRoot } from "react-dom/client";
import { App } from "./App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./core/mui";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
