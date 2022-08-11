import {
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  Portal,
} from "@chakra-ui/react";
import React from "react";
import LogoutMenuItem from "./Auth/LogoutMenuItem";

interface Props {
  email: string;
}

// GojeAvatar
export default function GAvatar({ email }: Props) {
  return (
    <Menu>
      <MenuButton>
        <Avatar size={"md"} />
      </MenuButton>
      <Portal>
        <MenuList textAlign={"center"}>
          <MenuOptionGroup
            defaultValue="asc"
            title={email}
            type="radio"
          ></MenuOptionGroup>
          <LogoutMenuItem />
        </MenuList>
      </Portal>
    </Menu>
  );
}
