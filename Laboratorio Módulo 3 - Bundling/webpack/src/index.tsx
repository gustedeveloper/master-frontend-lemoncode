import "./mystyles.scss";
import React from "react";
import { createRoot } from "react-dom/client";
import { MainComponent } from "./main-component";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <MainComponent />
  </>
);
