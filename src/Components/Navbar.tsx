import React from "react";
import {
  Box,
  Button,
  HStack,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { routes } from "../Global/Routes";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent="space-between"
        flexDirection="row"
        m="10px"
      >
        <HStack>
          <Link to={routes.register}>
            <Button colorScheme={"green"}>عضویت</Button>
          </Link>
          <Link to={routes.login}>
            <Button colorScheme={"gray"} variant="outline">
              ورود
            </Button>
          </Link>
        </HStack>
        <HStack>
          <Box>
            <IconButton
              aria-label="change color mode"
              variant="outline"
              colorScheme={"green"}
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
            />
          </Box>
        </HStack>
      </Box>

      <Box mr={"10px"} ml={"10px"}>
        <hr />
      </Box>
    </Box>
  );
}
