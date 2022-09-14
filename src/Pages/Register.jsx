import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api, APIs } from "../plugins/api";
import {
  FormControl,
  FormErrorMessage,
  InputGroup,
  InputLeftElement,
  HStack,
  VStack,
  Input,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

import {
  validateName,
  validateEmail,
  validatePassword,
  validateRPassword,
} from "../plugins/validator";
import CancelButton from "../Components/Form/CancelButton";
import FormWrapper from "../Components/Form/FormWrapper";
import SubmitButton from "../Components/Form/SubmitButton";
import useAuth from "../Hooks/useAuth";
import { dashboard, login } from "../Global/Routes";
import { isDev } from "../plugins/utils";
import Navbar from "../Components/Navbar";
import useNotifs from "../Hooks/useNotifs";
import { messages } from "../Global/messages";

export default function Register() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const { notifs, setNotifs } = useNotifs();

  // show and hide password states
  const [showPassword, setShowPassword] = useState(false);
  const handleEyeClick = () => setShowPassword(!showPassword);
  const [showRPassword, setShowRepeatPassword] = useState(false);
  const handleSecondEyeClick = () => setShowRepeatPassword(!showRPassword);

  const [name, setName] = useState({ name: "", err: false });
  const [email, setEmail] = useState({ email: "", err: false });
  const [password, setPassword] = useState({ password: "", err: false });
  const [rPassword, setRPassword] = useState({ rPassword: "", err: false });
  const [disableSubmit, setDisableSubmit] = useState(false);

  const handlePasswordBlur = () => {
    setPassword({ ...password, err: validatePassword(password.password) });
    setRPassword({
      ...rPassword,
      err: validateRPassword(password.password, rPassword.rPassword),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisableSubmit(true);
    const tmpErrors = [];
    if (validateName(name.name)) tmpErrors.push(validateName(name.name));
    if (validateEmail(email.email)) tmpErrors.push(validateEmail(email.email));
    if (validatePassword(password.password))
      tmpErrors.push(validatePassword(password.password));
    if (validateRPassword(password.password, rPassword.rPassword))
      tmpErrors.push(validateRPassword(password.password, rPassword.rPassword));

    if (tmpErrors.length > 0) {
      setNotifs({ ...notifs, errors: [...tmpErrors] });
      setDisableSubmit(false);
    } else {
      const data = {
        name: name.name,
        email: email.email,
        password: password.password,
      };

      // TODO: cleanCode (seperate file)
      const request = APIs.auth.register;
      request.data = data;
      api(request)
        .then((res) => {
          if (isDev()) {
            console.log("api response:", res);
          }
          if (
            res.status === 200 &&
            res?.data?.email[0] === "The email has already been taken."
          ) {
            setNotifs({ errors: [messages.err.emailTaken] });
            setDisableSubmit(false);
          } else if (res.status === 201) {
            setAuth({
              email: res.data.data.email,
              name: res.data.data.name,
              access_token: res.data.access_token,
              token_type: res.data.token_type,
            });
            setNotifs({ successes: [messages.success.accountCreated] });
            navigate(dashboard);
          } else if (res.code === "ERR_BAD_RESPONSE") {
            setNotifs({ errors: [messages.err.err] });
            setDisableSubmit(false);
          }
        })
        .catch((err) => {
          if (isDev()) {
            console.error("api error:", err);
          }
          setNotifs({ errors: [messages.err.err] });
          setDisableSubmit(false);
        });
    }
  };

  const isNameValid = name.err ? true : false;
  const isEmailValid = email.err ? true : false;
  const isPasswordValid = password.err ? true : false;
  const isRPasswordValid = rPassword.err ? true : false;

  return (
    <>
      <Navbar />
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <Box pt={"10px"} pb={"14px"}>
            <Text textAlign={"center"} fontSize="sm" color="gray">
              لطفا اطلاعات زیر را با دقت وارد نمایید.
            </Text>
          </Box>

          <Box>
            <VStack spacing={"10px"}>
              <FormControl isInvalid={isNameValid}>
                <Input
                  id="name"
                  value={name.name}
                  onChange={(e) => {
                    const value = e.target.value;
                    setName({ name: value, err: validateName(value) });
                  }}
                  onBlur={() => {
                    setName({ ...name, err: validateName(name.name) });
                  }}
                  placeholder="نام"
                  size="md"
                />
                {name.err ? (
                  <FormErrorMessage>{name.err}</FormErrorMessage>
                ) : (
                  <></>
                )}
              </FormControl>

              <FormControl isInvalid={isEmailValid}>
                <Input
                  id="email"
                  value={email.email}
                  onChange={(e) => {
                    const value = e.target.value;
                    setEmail({ email: value, err: validateEmail(value) });
                  }}
                  onBlur={() => {
                    setEmail({ ...email, err: validateEmail(email.email) });
                  }}
                  type="email"
                  placeholder="ایمیل"
                />
                {email.err ? (
                  <FormErrorMessage>{email.err}</FormErrorMessage>
                ) : (
                  <></>
                )}
              </FormControl>

              <InputGroup size="md">
                <FormControl isInvalid={isPasswordValid}>
                  <Input
                    id="password"
                    value={password.password}
                    onChange={(e) => {
                      const value = e.target.value;
                      setPassword({
                        password: value,
                        err: validatePassword(value),
                      });
                    }}
                    onBlur={handlePasswordBlur}
                    pr="15px"
                    type={showPassword ? "text" : "password"}
                    placeholder="رمز عبور"
                  />
                  <InputLeftElement width="3.2rem">
                    <Button h="1.75rem" size="sm" onClick={handleEyeClick}>
                      <ViewIcon />
                    </Button>
                  </InputLeftElement>
                  {password.err ? (
                    <FormErrorMessage>{password.err}</FormErrorMessage>
                  ) : (
                    <></>
                  )}
                </FormControl>
              </InputGroup>

              <FormControl isInvalid={isRPasswordValid}>
                <InputGroup size="md">
                  <Input
                    id="rPassword"
                    value={rPassword.rPassword}
                    onChange={(e) => {
                      const value = e.target.value;
                      setRPassword({
                        rPassword: value,
                        err: validateRPassword(password.password, value),
                      });
                    }}
                    onBlur={handlePasswordBlur}
                    pr="15px"
                    type={showRPassword ? "text" : "password"}
                    placeholder="تکرار رمز عبور"
                  />
                  <InputLeftElement width="3.2rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={handleSecondEyeClick}
                    >
                      <ViewIcon />
                    </Button>
                  </InputLeftElement>
                </InputGroup>
                {rPassword.err ? (
                  <FormErrorMessage>{rPassword.err}</FormErrorMessage>
                ) : (
                  <></>
                )}
              </FormControl>
            </VStack>
          </Box>

          <Box pt="20px">
            <HStack
              display={"flex"}
              justifyContent="space-around"
              justify={"left"}
              spacing={"10px"}
            >
              <SubmitButton disableSubmit={disableSubmit} text="ثبت نام" />
              <CancelButton />
            </HStack>
          </Box>
          <Box pt={"20px"} textAlign="center">
            <Text fontSize={".8rem"}>
              قبلا ثبت نام کرده اید؟ <Link to={login}>وارد شوید</Link>
            </Text>
          </Box>
        </form>
      </FormWrapper>
    </>
  );
}
