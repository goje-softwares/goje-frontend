import {
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuOptionGroup,
  Portal,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  email: string;
}

// GojeAvatar
export default function GAvatar({ email }: Props) {
  return (
    <>
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
            <MenuItem>خروج</MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    </>
  );
}
