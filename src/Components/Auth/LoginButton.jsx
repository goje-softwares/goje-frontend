import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../Global/Routes";

export default function LoginButton() {
  return (
    <Link id="register-button" to={routes.login}>
      <Button colorScheme={"gray"} variant="outline">
        ورود
      </Button>
    </Link>
  );
}
