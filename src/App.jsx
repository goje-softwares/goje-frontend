import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import theme from "./Global/theme";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import NotFound from "./Pages/NotFound";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import RequireAuth from "./Components/Auth/RequireAuth";
import { routes } from "./Global/Routes";
import RequireNotAuth from "./Components/Auth/RequireNotAuth";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/">
          {/* public routes */}
          <Route path={routes.home} element={<Home />} />

          {/* protected routes */}
          <Route element={<RequireNotAuth />}>
            <Route path={routes.login} element={<Login />} />
            <Route path={routes.register} element={<Register />} />
          </Route>

          {/* protected routes */}
          <Route element={<RequireAuth />}>
            <Route path={routes.dashboard} element={<Dashboard />} />
          </Route>

          {/* catch all */}
          <Route path={"*"} element={<NotFound />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
