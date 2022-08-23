import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
} from "@chakra-ui/react";
import convertToEnDigits from "convert-to-en-digits";
import React, { useEffect } from "react";
import { useState } from "react";
import { toastConfig } from "../../Global/toastConfig";
import { api, APIs } from "../../plugins/api";
import { validateName, validatePrice } from "../../plugins/validator";
import SubmitButton from "../Form/SubmitButton";

export default function AddProduct({ products, setProducts }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [toastErrors, setToastErrors] = useState([]);

  const [disableSubmit, setDisableSubmit] = useState(false);

  const clearToastsErrorsAfter3sec = () => {
    setTimeout(() => {
      setToastErrors([]);
      setDisableSubmit(false);
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisableSubmit(true);
    const tmpErrors = [];
    if (validateName(name)) tmpErrors.push(validateName(name));
    const tmpPrice = convertToEnDigits(price);
    if (validatePrice(tmpPrice)) tmpErrors.push(validatePrice(tmpPrice));

    if (tmpErrors.length > 0) {
      setToastErrors(tmpErrors);
      clearToastsErrorsAfter3sec();
    } else {
      const data = {
        name: name,
        price: tmpPrice,
      };
      const request = APIs.product.create;
      request.data = data;
      api(request)
        .then((res) => {
          if (res.status === 201) {
            setProducts([res.data, ...products]);
            setDisableSubmit(false);
            setName("");
            setPrice("");
          }
          // error checking + toast

          console.log("log", res);
        })
        .catch((err) => {
          // toasts
          console.error(err);
        });
    }
  };

  const toast = useToast();
  const { position, duration, isClosable } = toastConfig;

  useEffect(() => {
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
  });

  return (
    <Box m="20px">
      <Heading p={"5px"} fontSize="xl">
        اضافه کردن محصول
      </Heading>
      <hr />
      <Box
        display={"flex"}
        flexDir="row"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>نام محصول</FormLabel>
            <Input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="نام محصول"
              value={name}
            />
          </FormControl>
          <FormControl>
            <FormLabel>قیمت</FormLabel>
            <Input
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              type="text"
              placeholder="قیمت"
              value={price}
            />
          </FormControl>
          <SubmitButton disableSubmit={disableSubmit} text={"اضافه"} />
        </form>
      </Box>
    </Box>
  );
}
