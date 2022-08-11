import { Box } from "@chakra-ui/react";
import React from "react";
import { Children } from "../Global/Interfaces";

export default function NavBarWrapper({ children }: Children) {
  return (
    <Box
      display={"flex"}
      justifyContent="space-between"
      flexDirection="row"
      m="10px"
    >
      {children}
    </Box>
  );
}
