import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ColorModeScript, createStandaloneToast } from "@chakra-ui/react";

import theme from "./Global/theme";
import App from "./App";
import { AuthProvider } from "./Context/AuthProvider";
import { NotifsProvider } from "./Context/NotifsProvider";

const { ToastContainer } = createStandaloneToast({ theme: theme });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NotifsProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
          <ToastContainer />
        </NotifsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
