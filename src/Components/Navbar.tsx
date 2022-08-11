import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import LoginButton from "./Auth/LoginButton";
import SignUpBotton from "./Auth/SignUpButton";
import NavBarWrapper from "./NavBarWrapper";
import SwitchThemeButton from "./SwitchThemeButton";
import GAvatar from "./GAvatar";
import useAuth from "../Hooks/useAuth";

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
          <SwitchThemeButton />
        </HStack>
      </NavBarWrapper>
      <Box mr={"10px"} ml={"10px"}>
        <hr />
      </Box>
    </Box>
  );
}
