import "./mystyles.scss";
import React from "react";
import { createRoot } from "react-dom/client";
import { MainComponent } from "./main-component";
import logoImg from "./content/logo_1.png";

const img = document.createElement("img");
img.src = logoImg;

document.getElementById("imgContainer").appendChild(img);

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <MainComponent />
  </div>
);
