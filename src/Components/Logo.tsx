import React from "react";
import { Image } from "@chakra-ui/react";
import logoFile from "../assets/logo192.png";

type Props = {
  boxSize: string;
};
const Logo = ({ boxSize }: Props) => {
  return <Image boxSize={boxSize} src={logoFile} alt="Logo" />;
};

export default Logo;
