import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function CancelButton() {
  return (
    <Box width={"100%"}>
      <Link to={"/"}>
        <Button
          id="cancle"
          width={"100%"}
          colorScheme="gray"
          variant={"outline"}
        >
          انصراف
        </Button>
      </Link>
    </Box>
  );
}
