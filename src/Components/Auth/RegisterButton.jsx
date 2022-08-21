import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../Global/Routes";

export default function RegisterBotton() {
  return (
    <Link id="login-button" to={routes.register}>
      <Button colorScheme={"green"}>عضویت</Button>
    </Link>
  );
}
