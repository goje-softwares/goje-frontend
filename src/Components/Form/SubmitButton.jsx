import React from "react";
import { Button } from "@chakra-ui/react";

export default function SubmitButton({ disableSubmit, text }) {
  return (
    <Button
      type="submit"
      disabled={disableSubmit}
      width={"100%"}
      colorScheme="green"
    >
      {text}
    </Button>
  );
}
