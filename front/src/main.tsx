import {createRoot} from "react-dom/client";
import App from "./App";
import "./index.css";

const domeNode = document.getElementById("root");
const root = createRoot(domeNode as HTMLElement);
root.render(<App />);
