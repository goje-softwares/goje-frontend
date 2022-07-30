import React from "react";
import { Image } from "@chakra-ui/react";
import logoFile from "../assets/logo192.png";

// eslint-disable-next-line react/prop-types
const Logo = ({boxSize}) => {
  return (
    <Image boxSize={boxSize} src={logoFile} alt="Logo" />
  );
};

export default Logo;
