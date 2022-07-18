import React from "react";
import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import LoginSignup from "../popups/LoginSignup";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent="space-between"
        flexDirection="row-reverse"
        m="10px"
      >
        <Box>
          <IconButton
            variant="outline"
            colorScheme={"green"}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </Box>
        <LoginSignup />
      </Box>
      <Box mr={"10px"} ml={"10px"}>
        <hr />
      </Box>
    </Box>
  );
}
