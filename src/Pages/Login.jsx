import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api, APIs } from "../plugins/api";
import {
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
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

import { validateEmail, validatePassword } from "../plugins/validator";
import { toastConfig } from "../Global/toastConfig";
import CancelButton from "../Components/Form/CancelButton";
import SubmitButton from "../Components/Form/SubmitButton";
import FormWrapper from "../Components/Form/FormWrapper";
import useAuth from "../Hooks/useAuth";
import { routes } from "../Global/Routes";
import { isDev } from "../plugins/utils";

export default function Login() {
  const { setAuth } = useAuth();

  // TODO: https://youtu.be/oUZjO00NkhY?list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd&t=1010
  const navigate = useNavigate();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  // email
  const [email, setEmail] = useState({ email: "", err: false });
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail({ ...email, email: value });
  };

  // password
  const [password, setPassword] = useState({ password: "", err: false });
  const handlePasswordChange = (e) => {
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
  const [toastErrors, setToastErrors] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
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

      // TODO: cleanCode (seperate file)
      const request = APIs.auth.login;
      request.data = data;
      api(request)
        .then((res) => {
          if (isDev()) {
            console.log("api response:", res);
          }
          if (res.status === 200) {
            setAuth({
              email: res.data.data.email,
              name: res.data.data.name,
              access_token: res.data.access_token,
              token_type: res.data.token_type,
            });
            setToastErrors([]);
            setSuccess(true);
            navigate(routes.dashboard);
          }
        })
        .catch((err) => {
          if (isDev()) {
            console.error("api error:", err);
          }
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
          position: position,
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
            position: position,
            duration: duration,
            isClosable: isClosable,
            icon: <></>,
          });
        }
      }
    }
  }, [success, toastErrors, toast, position, duration, isClosable]);

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <Box display={"flex"} flexDir="column">
          <Box pt={"10px"} pb={"14px"}>
            <Text textAlign={"center"} fontSize="sm" color="gray">
              لطفا ایمیل و رمز عبور خود را وارد کنید.
            </Text>
          </Box>
          <Box>
            <VStack spacing={"10px"}>
              <FormControl isInvalid={email.err}>
                <Input
                  id="email"
                  value={email.email}
                  onChange={handleEmailChange}
                  placeholder="ایمیل"
                  size="md"
                />
              </FormControl>
              <InputGroup size="md">
                <Input
                  id="password"
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
            <Link to={"#"}>
              <Text fontSize={"sm"}>فراموشی رمز عبور</Text>
            </Link>
          </Box>
          <Box pt="20px">
            <HStack
              display={"flex"}
              justifyContent="space-around"
              justify={"left"}
              spacing={"10px"}
            >
              <SubmitButton disableSubmit={disableSubmit} text="ورود" />
              <CancelButton />
            </HStack>
          </Box>
        </Box>
      </form>
    </FormWrapper>
  );
}
