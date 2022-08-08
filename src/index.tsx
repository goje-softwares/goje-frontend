import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ColorModeScript, createStandaloneToast } from "@chakra-ui/react";

import theme from "./Global/theme";
import App from "./App";
import { AuthProvider } from "./Context/AuthProvider";

const { ToastContainer } = createStandaloneToast({ theme: theme });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
        <ToastContainer />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
