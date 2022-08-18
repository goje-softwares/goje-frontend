import { Box } from "@chakra-ui/react";
import React from "react";

export default function FormWrapper({ children }) {
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
