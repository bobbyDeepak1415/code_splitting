import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App1 from "./components/App1";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App1/>
    </BrowserRouter>
  </StrictMode>
);
