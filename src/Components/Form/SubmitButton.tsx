import React from "react";
import { Button } from "@chakra-ui/react";
import { bool } from "../../Global/Types";

type Props = {
  disableSubmit: bool;
  text: string;
};

export default function SubmitButton({ disableSubmit, text }: Props) {
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
