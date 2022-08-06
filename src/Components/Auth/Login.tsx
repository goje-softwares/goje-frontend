import React, { useEffect, useState, useContext } from "react";
import axios from "../../api/axios";
import {
  Link,
  InputGroup,
  InputLeftElement,
  HStack,
  FormControl,
  VStack,
  Input,
  Text,
  Button,
  Box,
  useToast,
  ToastPosition,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

import AuthContext from "../../Context/AuthProvider";
import { validateEmail, validatePassword } from "../../utils/validator";
import { eFunc, onClose, submitFunc, ToastErrors } from "../../Types";

import { toastConfig } from "../../Global/toastConfig";

type Props = {
  onClose: onClose;
};

export default function Login({ onClose }: Props) {
  // global auth
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { setAuth }: any = useContext(AuthContext);

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  // email
  const [email, setEmail] = useState({ email: "", err: false });
  const handleEmailChange = (e: eFunc) => {
    const value = e.target.value;
    setEmail({ ...email, email: value });
  };

  // password
  const [password, setPassword] = useState({ password: "", err: false });
  const handlePasswordChange = (e: eFunc) => {
    const value = e.target.value;
    setPassword({ ...password, password: value });
  };

  const clearToastsErrorsAfter3sec = () => {
    setTimeout(() => {
      setToastErrors([]);
      setDisableSubmit(false);
    }, 3000);
  };

  // submit
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [toastErrors, setToastErrors] = useState<ToastErrors>([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: submitFunc) => {
    e.preventDefault();
    setDisableSubmit(true);
    const tmpErrors = [];
    if (validateEmail(email.email)) tmpErrors.push(validateEmail(email.email));
    if (validatePassword(password.password))
      tmpErrors.push(validatePassword(password.password));

    if (tmpErrors.length > 0) {
      setToastErrors(tmpErrors);
      clearToastsErrorsAfter3sec();
    } else {
      const data = {
        email: email.email,
        password: password.password,
      };

      axios
        .post("/auth/login", data)
        .then((res) => {
          if (res.status === 200) {
            setAuth({
              access_token: res.data.access_token,
              token_type: res.data.token_type,
              // TODO: name: ,
              // TODO: email: ,
              // etc...
            });
            setToastErrors([]);
            onClose();
            setSuccess(true);
          }
        })
        .catch((err) => {
          if (err?.response?.status === 401) {
            setToastErrors(["ایمیل یا رمز عبور اشتباه است"]);
          } else if (err.response?.status === 404) {
            setToastErrors([
              "ارتباط با سرور برقرار نشد(اینترنت خود را بررسی کنید)",
            ]);
          } else {
            setToastErrors(["عملیات ورود با خطا روبرو شد"]);
          }
          clearToastsErrorsAfter3sec();
          setDisableSubmit(false);
          err && console.error(err);
        });
    }
  };

  const toast = useToast();
  const { position, duration, isClosable } = toastConfig;

  // toasts
  useEffect(() => {
    if (success) {
      if (!toast.isActive("success")) {
        toast({
          status: "success",
          description: "با موفقیت وارد شدید",
          id: "success",
          position: position as ToastPosition,
          duration: duration,
          isClosable: isClosable,
          icon: <></>,
        });
      }
      setSuccess(false);
    }

    if (toastErrors && toastErrors.length > 0) {
      for (let i = 0; i < toastErrors.length; i++) {
        if (!toast.isActive(i)) {
          toast({
            status: "error",
            description: toastErrors[i],
            id: i,
            position: position as ToastPosition,
            duration: duration,
            isClosable: isClosable,
            icon: <></>,
          });
        }
      }
    }
  }, [success, toastErrors, toast, position, duration, isClosable]);

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <Box pt={"10px"} pb={"14px"}>
          <Text textAlign={"center"} fontSize="sm" color="gray">
            لطفا ایمیل و رمز عبور خود را وارد کنید.
          </Text>
        </Box>
        <Box>
          <VStack spacing={"10px"}>
            <FormControl isInvalid={email.err}>
              <Input
                value={email.email}
                onChange={handleEmailChange}
                placeholder="ایمیل"
                size="md"
              />
            </FormControl>
            <InputGroup size="md">
              <Input
                pr="15px"
                value={password.password}
                onChange={handlePasswordChange}
                type={show ? "text" : "password"}
                placeholder="رمز عبور"
              />
              <InputLeftElement width="3.2rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  <ViewIcon />
                </Button>
              </InputLeftElement>
            </InputGroup>
          </VStack>
        </Box>
        <Box mt={"10px"}>
          <Link fontSize={"sm"}>فراموشی رمز عبور</Link>
        </Box>
        <Box pt="20px">
          <HStack
            display={"flex"}
            justifyContent="space-around"
            justify={"left"}
            spacing={"10px"}
          >
            <Button
              type="submit"
              disabled={disableSubmit}
              width={"100%"}
              colorScheme="green"
            >
              ورود
            </Button>
            <Button
              width={"100%"}
              colorScheme="gray"
              variant={"outline"}
              onClick={onClose}
            >
              انصراف
            </Button>
          </HStack>
        </Box>
      </Box>
    </form>
  );
}
