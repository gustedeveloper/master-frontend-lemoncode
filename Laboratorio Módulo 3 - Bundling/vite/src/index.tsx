import { createRoot } from "react-dom/client";
import { HelloComponent } from "./hello";
import "./mystyles.scss";

const root = createRoot(document.getElementById("root"));

root.render(<HelloComponent />);
