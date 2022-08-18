import { Box } from "@chakra-ui/react";
import React from "react";

export default function NavBarWrapper({ children }) {
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
