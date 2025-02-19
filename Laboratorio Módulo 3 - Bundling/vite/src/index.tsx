import { createRoot } from "react-dom/client";
import { App } from "./components/app";
import "./mystyles.scss";

const root = createRoot(document.getElementById("root"));

root.render(<App />);
