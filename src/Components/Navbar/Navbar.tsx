import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import LoginButton from "./Components/LoginButton";
import SignUpBotton from "./Components/SignUpButton";
import NavBarWrapper from "./Components/NavBarWrapper";
import SwitchModeButton from "./Components/SwitchModeButton";

export default function Navbar() {
  return (
    <Box>
      <NavBarWrapper>
        <HStack>
          <SignUpBotton />
          <LoginButton />
        </HStack>
        <HStack>
          <SwitchModeButton />
        </HStack>
      </NavBarWrapper>
      <Box mr={"10px"} ml={"10px"}>
        <hr />
      </Box>
    </Box>
  );
}
