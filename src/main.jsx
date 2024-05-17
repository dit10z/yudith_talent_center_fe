import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { DarkTheme, LightTheme } from "./resource/themes";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

const isLightMode = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={isLightMode ? LightTheme : DarkTheme}>
      <BrowserRouter>
        <Toaster />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
