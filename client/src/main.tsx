import React from "react";
import ReactDOM from "react-dom/client";
import { globalStyles } from "./styles/globals";
import { Router } from "./route/router.tsx";

globalStyles();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
