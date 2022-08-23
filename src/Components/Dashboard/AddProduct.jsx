import { Box, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import convertToEnDigits from "convert-to-en-digits";
import React from "react";
import { useState } from "react";
import useToasts from "../../Hooks/useToasts";
import { api, APIs } from "../../plugins/api";
import { isDev } from "../../plugins/utils";
import { validateName, validatePrice } from "../../plugins/validator";
import SubmitButton from "../Form/SubmitButton";

export default function AddProduct({ products, setProducts }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const { toasts, setToasts } = useToasts();
  const [disableSubmit, setDisableSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisableSubmit(true);
    const tmpErrors = [];
    if (validateName(name)) tmpErrors.push(validateName(name));
    const tmpPrice = convertToEnDigits(price);
    if (validatePrice(tmpPrice)) tmpErrors.push(validatePrice(tmpPrice));

    if (tmpErrors.length > 0) {
      setToasts({ ...toasts, errors: [...tmpErrors] });
      setDisableSubmit(false);
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
            setName("");
            setPrice("");
            setToasts({ successes: ["محصول اضافه شد."] });
          }
        })
        .catch((err) => {
          if (err.code === "ERR_NETWORK") {
            setToasts({ errors: ["ارتباط با سرور برقرار نشد."] });
          } else {
            if (err) {
              setToasts({ errors: ["خطا"] });
              if (isDev()) console.error(err);
            }
          }
        });
      setDisableSubmit(false);
    }
  };

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
