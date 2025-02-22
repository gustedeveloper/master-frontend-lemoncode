import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { ThemeProvider } from "@mui/material";
import { theme } from "./core/mui";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
