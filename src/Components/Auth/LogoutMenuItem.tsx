import { MenuItem } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios, { APIs } from "../../api/axios";
import { routes } from "../../Global/Routes";
import useAuth from "../../Hooks/useAuth";

export default function LogoutMenuItem() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { setAuth }: any = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    const req = APIs.auth.logout;
    console.log("hi");

    axios(req)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setAuth({ email: "", name: "", access_token: "", token_type: "" });
          navigate(routes.home);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return <MenuItem onClick={handleClick}>خروج</MenuItem>;
}
