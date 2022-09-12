import React from "react";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/toast";
import useNotifs from "../Hooks/useNotifs";

export default function Notifs() {
  const { notifs } = useNotifs();

  const toast = useToast();
  const position = "bottom-left";
  const duration = 4000;
  const isClosable = true;

  useEffect(() => {
    const toastErrors = notifs.errors;
    if (toastErrors && toastErrors.length > 0) {
      for (let i = 0; i < toastErrors.length; i++) {
        if (!toast.isActive(i)) {
          toast({
            status: "error",
            description: toastErrors[i],
            id: i,
            position: position,
            duration: duration,
            isClosable: isClosable,
            icon: <></>,
          });
        }
      }
    }

    const toastSuccesses = notifs.successes;
    if (toastSuccesses && toastSuccesses.length > 0) {
      for (let i = 0; i < toastSuccesses.length; i++) {
        if (!toast.isActive(i)) {
          toast({
            status: "success",
            description: toastSuccesses[i],
            id: i,
            position: position,
            duration: duration,
            isClosable: isClosable,
            icon: <></>,
          });
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notifs]);

  return <></>;
}
