import { Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Dashboard/Sidebar";
import Navbar from "../Components/Navbar";

export default function Dashboard() {
  return (
    <Box id="dashboard" display="flex" w={"100%"}>
      <Sidebar />
      <Box id="main" w={"80%"} display={"flex"} flexDir="column">
        <Box id="nav-bar" h="88px">
          <Navbar />
        </Box>
        <Box
          w={"100%"}
          h="100%"
          display={"flex"}
          flexDir="column"
          justifyContent="center"
          alignItems={"center"}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
