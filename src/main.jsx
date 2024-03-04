import React from "react";
import ReactDOM from "react-dom/client";
import RoutesApp from "./routes/routes";
import { GlobalStyle } from "./styles/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RoutesApp />
    <GlobalStyle />
  </React.StrictMode>
);