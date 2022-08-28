import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { register } from "../../Global/Routes";

export default function RegisterBotton() {
  return (
    <Link id="register-button" to={register}>
      <Button colorScheme={"green"}>عضویت</Button>
    </Link>
  );
}
