import { MenuItem } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { api, APIs } from "../../plugins/api";
import { home } from "../../Global/Routes";
import useAuth from "../../Hooks/useAuth";
import { isDev } from "../../plugins/utils";

export default function LogoutMenuItem() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    const req = APIs.auth.logout;
    api(req)
      .then((res) => {
        if (isDev()) {
          console.log("api response:", res);
        }
        if (res.status === 200) {
          setAuth({ email: "", name: "", access_token: "", token_type: "" });
          navigate(home);
        }
      })
      .catch((err) => {
        if (isDev()) {
          console.error("api error:", err);
        }
      });
  };
  return <MenuItem onClick={handleClick}>خروج</MenuItem>;
}
