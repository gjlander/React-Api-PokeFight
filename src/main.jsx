import { createRoot } from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "./styles.scss";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <main className="light text-foreground bg-background">
      <App />
    </main>
  </BrowserRouter>
 
);
