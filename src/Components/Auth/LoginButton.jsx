import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { login } from "../../Global/Routes";

export default function LoginButton() {
  return (
    <Link id="login-button" to={login}>
      <Button colorScheme={"gray"} variant="outline">
        ورود
      </Button>
    </Link>
  );
}
