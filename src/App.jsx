import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import theme from "./Global/theme";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import RequireAuth from "./Components/Auth/RequireAuth";
import RequireNotAuth from "./Components/Auth/RequireNotAuth";
import DashboardHome from "./Components/Dashboard/DashboardHome";
import Products from "./Components/Dashboard/Products";
import Notifs from "./Components/Notifs";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Notifs />
      <Routes>
        <Route path="/">
          {/* public routes */}
          {/* <Route path={routes.home} element={<Home />} /> */}

          {/* protected routes */}
          <Route element={<RequireNotAuth />}>
            <Route index element={<Home />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/register"} element={<Register />} />
          </Route>

          {/* protected routes */}
          <Route element={<RequireAuth />}>
            <Route path={"dashboard"} element={<Dashboard />}>
              <Route index element={<DashboardHome />} />
              <Route path={"products"} element={<Products />} />
            </Route>
          </Route>

          {/* catch all */}
          <Route path={"*"} element={<NotFound />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
