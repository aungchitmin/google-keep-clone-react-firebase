import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {InputContextProvider} from "./context/InputContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <InputContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </InputContextProvider>
);
