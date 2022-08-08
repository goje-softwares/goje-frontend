import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../Global/Routes";

export default function LoginButton() {
  return (
    <Link to={routes.register}>
      <Button colorScheme={"green"}>عضویت</Button>
    </Link>
  );
}
