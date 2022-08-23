import React from "react";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/toast";
import useToasts from "../Hooks/useToasts";

export default function Toasts() {
  const { toasts } = useToasts();

  const toast = useToast();
  const position = "bottom-left";
  const duration = 4000;
  const isClosable = true;

  useEffect(() => {
    const toastErrors = toasts.errors;
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

    const toastSuccesses = toasts.successes;
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
  }, [toasts]);

  return <></>;
}
