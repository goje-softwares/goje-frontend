import { MenuItem } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { api, APIs } from "../../api/api";
import { routes } from "../../Global/Routes";
import useAuth from "../../Hooks/useAuth";
import { isDev } from "../../utils/utils";

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
          navigate(routes.home);
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
