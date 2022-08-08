import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import LoginButton from "./Components/LoginButton";
import SignUpBotton from "./Components/SignUpButton";
import NavBarWrapper from "./Components/NavBarWrapper";
import SwitchModeButton from "./Components/SwitchModeButton";
import GAvatar from "./Components/GAvatar";
import useAuth from "../../Hooks/useAuth";

export default function Navbar() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { auth }: any = useAuth();

  return (
    <Box>
      <NavBarWrapper>
        {auth?.name ? (
          <Box>
            <HStack>
              <GAvatar email={auth.email} />
            </HStack>
          </Box>
        ) : (
          <Box>
            <HStack>
              <SignUpBotton />
              <LoginButton />
            </HStack>
          </Box>
        )}
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
