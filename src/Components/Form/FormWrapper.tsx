import { Box } from "@chakra-ui/react";
import React from "react";
import { Children } from "../../Global/Interfaces";

export default function FormWrapper({ children }: Children) {
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
