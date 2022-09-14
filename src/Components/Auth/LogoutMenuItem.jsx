import { MenuItem } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { api, APIs } from "../../plugins/api";
import { home } from "../../Global/Routes";
import useAuth from "../../Hooks/useAuth";
import { handleApiErrors } from "../../plugins/utils";

export default function LogoutMenuItem() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    const req = APIs.auth.logout;
    api(req)
      .then((res) => {
        if (res.status === 200) {
          setAuth({ email: "", name: "", access_token: "", token_type: "" });
          navigate(home);
        }
      })
      .catch((err) => {
        handleApiErrors(err);
      });
  };
  return <MenuItem onClick={handleClick}>خروج</MenuItem>;
}
