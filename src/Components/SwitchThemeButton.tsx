import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import React from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function SwitchThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <IconButton
        aria-label="change color mode"
        variant="outline"
        colorScheme={"green"}
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
    </Box>
  );
}
