import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import PensilProvider from "./context/PensilContext";
import ImgProvider from "./context/ImgContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PensilProvider>
        <ImgProvider>
          <App />
        </ImgProvider>
      </PensilProvider>
    </BrowserRouter>
  </React.StrictMode>
);
