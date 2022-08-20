import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { ThemeProvider } from "@mui/material/styles";
import { AuthProvider } from "./context/authProvider";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  </BrowserRouter>
);
