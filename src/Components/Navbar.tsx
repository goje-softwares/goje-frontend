import React from "react";
import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Auth from "../Pages/Auth";

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
            aria-label="change color mode"
            variant="outline"
            colorScheme={"green"}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </Box>
        <Auth />
      </Box>
      <Box mr={"10px"} ml={"10px"}>
        <hr />
      </Box>
    </Box>
  );
}
