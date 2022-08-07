import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function FormWrapper({ children }: Props) {
  return (
    <Box
      className="wrapper"
      margin={"auto"}
      mt="70px"
      width={{ base: "60%", md: "40%", xl: "50%" }}
    >
      {children}
    </Box>
  );
}
