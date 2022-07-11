import React from "react";
import { Box, IconButton, Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

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
            color={"grass"}
            borderColor="grass"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </Box>
        <Box>
          <Button color={"grass"} borderColor="grass" variant="outline">
            ورود/عضویت
          </Button>
        </Box>
      </Box>
      <Box mr={"10px"} ml={"10px"}>
        <hr />
      </Box>
    </Box>
  );
}
