import React from "react";
import ReactDOM from "react-dom/client";
import { globalStyles } from "./styles/globals";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { Router } from "./route/router.tsx";

globalStyles();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
