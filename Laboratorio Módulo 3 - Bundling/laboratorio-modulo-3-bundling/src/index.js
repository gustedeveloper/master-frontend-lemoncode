import "./mystyles.scss";
import { sum } from "./new-message.js";
import logoImg from "./content/logo_1.png";

const name = "Guste";
const messageToDisplay = `Hello, ${name}! Welcome to the world of WebPack! Enjoy :)`;

const a = 30;
const b = 40;

const total = `The total is ${sum(a, b)}`;

document.write(messageToDisplay);
document.write(total);

const img = document.createElement("img");
img.src = logoImg;

document.getElementById("imgContainer").appendChild(img);
