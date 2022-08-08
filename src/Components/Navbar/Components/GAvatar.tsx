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
import { useNavigate } from "react-router-dom";
import axios, { APIs } from "../../../api/axios";
import { routes } from "../../../Global/Routes";
import useAuth from "../../../Hooks/useAuth";

interface Props {
  email: string;
}

// GojeAvatar
export default function GAvatar({ email }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { setAuth }: any = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    const req = APIs.auth.logout;
    axios(req)
      .then((res) => {
        if (res.status === 200) {
          setAuth({ email: "", name: "", access_token: "", token_type: "" });
          navigate(routes.home);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
          <MenuItem onClick={handleClick}>خروج</MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  );
}
