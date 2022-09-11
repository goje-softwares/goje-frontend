import { Box, FormControl, Heading, Input, Textarea } from "@chakra-ui/react";
import convertToEnDigits from "convert-to-en-digits";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { messages } from "../../Global/messages";
import useNotifs from "../../Hooks/useNotifs";
import { api, APIs } from "../../plugins/api";
import { isDev } from "../../plugins/utils";
import {
  validateAmount,
  validateName,
  validatePrice,
} from "../../plugins/validator";
import SubmitButton from "../Form/SubmitButton";

export default function AddProduct({ products, setProducts }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const { notifs, setNotifs } = useNotifs();
  const [disableSubmit, setDisableSubmit] = useState(false);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisableSubmit(true);
    const tmpErrors = [];
    const tmpPrice = convertToEnDigits(price);
    const tmpAmount = convertToEnDigits(amount);
    if (validateName(name)) tmpErrors.push(validateName(name));
    if (validateAmount(tmpAmount)) tmpErrors.push(validateAmount(tmpAmount));
    if (validatePrice(tmpPrice)) tmpErrors.push(validatePrice(tmpPrice));
    // TODO: validate description
    if (tmpErrors.length > 0) {
      setNotifs({ ...notifs, errors: [...tmpErrors] });
      setDisableSubmit(false);
    } else {
      const data = {
        name: name,
        amount: amount,
        price: tmpPrice,
        description: description,
      };
      // TODO: backend not getting amount!
      const request = APIs.product.create;
      request.data = data;
      api(request)
        .then((res) => {
          if (res.status === 201) {
            setProducts([res.data, ...products]);
            setName("");
            setPrice("");
            setAmount("");
            setDescription("");
            setNotifs({ successes: [messages.success.productAdded] });
            inputRef.current.select();
            if (isDev()) console.log("product added:", res.data);
          }
        })
        .catch((err) => {
          if (err.code === "ERR_NETWORK") {
            setNotifs({ errors: [messages.err.noServer] });
          } else {
            if (err) {
              setNotifs({ errors: [messages.err.err] });
              if (isDev()) console.error(err);
            }
          }
        });
      setDisableSubmit(false);
    }
  };

  return (
    <Box m="20px">
      <Heading p={"5px 0 10px 0"} fontSize="xl">
        اضافه کردن محصول
      </Heading>
      <hr />
      <Box width={"100%"}>
        <form onSubmit={handleSubmit}>
          <Box
            mt={"20px"}
            display="flex"
            flexDir={"row"}
            justifyContent="space-between"
            alignItems={"end"}
            width="100%"
          >
            <FormControl width={"24%"}>
              <Input
                ref={inputRef}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="نام محصول"
                value={name}
              />
            </FormControl>
            <FormControl width={"24%"}>
              <Input
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                type="text"
                placeholder="تعداد"
                value={amount}
              />
            </FormControl>
            <FormControl width={"24%"}>
              <Input
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                type="text"
                placeholder="قیمت(﷼)"
                value={price}
              />
            </FormControl>

            <FormControl width={"24%"}>
              <SubmitButton disableSubmit={disableSubmit} text={"اضافه"} />
            </FormControl>
          </Box>
          <Box mt={"20px"} width="100%">
            <Textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeholder="توضیحات...(اختیاری)"
              size="sm"
            />
          </Box>
        </form>
      </Box>
    </Box>
  );
}
