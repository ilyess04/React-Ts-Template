import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.scss";
import React from "react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
