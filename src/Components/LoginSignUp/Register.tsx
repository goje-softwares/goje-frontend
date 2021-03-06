import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
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
  useToast,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

import {
  validateName,
  validateEmail,
  validatePassword,
  validateRPassword,
} from "../../utils/validator";
import {
  eFunc,
  Email,
  Name,
  onClose,
  Password,
  RPassword,
  submitFunc,
  ToastErrors,
} from "../../Types";

type Props = {
  onClose: onClose;
};

// eslint-disable-next-line react/prop-types
export default function Register({ onClose }: Props) {
  // show and hide password states
  const [showPassword, setShowPassword] = useState(false);
  const handleEyeClick = () => setShowPassword(!showPassword);
  const [showRPassword, setShowRepeatPassword] = useState(false);
  const handleSecondEyeClick = () => setShowRepeatPassword(!showRPassword);

  // name
  const [name, setName] = useState<Name>({ name: "", err: false });
  const handleNameChange = (e: eFunc) => {
    const value = e.target.value;
    setName({ name: value, err: validateName(value) });
  };
  const handleNameBlur = () => {
    setName({ ...name, err: validateName(name.name) });
  };

  // email
  const [email, setEmail] = useState<Email>({ email: "", err: false });
  const handleEmailChange = (e: eFunc) => {
    const value = e.target.value;
    setEmail({ email: value, err: validateEmail(value) });
  };
  const handleEmailBlur = () => {
    setEmail({ ...email, err: validateEmail(email.email) });
  };

  // password
  const [password, setPassword] = useState<Password>({
    password: "",
    err: false,
  });
  const handlePasswordChange = (e: eFunc) => {
    const value = e.target.value;
    setPassword({ password: value, err: validatePassword(value) });
  };
  const handlePasswordBlur = () => {
    setPassword({ ...password, err: validatePassword(password.password) });
    setRPassword({
      ...rPassword,
      err: validateRPassword(password.password, rPassword.rPassword),
    });
  };

  // repeat password
  const [rPassword, setRPassword] = useState<RPassword>({
    rPassword: "",
    err: false,
  });
  const handleRPasswordChange = (e: eFunc) => {
    const value = e.target.value;
    setRPassword({
      rPassword: value,
      err: validateRPassword(password.password, value),
    });
  };
  const handleRPasswordBlur = () => {
    setRPassword({
      ...rPassword,
      err: validateRPassword(password.password, rPassword.rPassword),
    });
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
    if (validateName(name.name)) tmpErrors.push(validateName(name.name));
    if (validateEmail(email.email)) tmpErrors.push(validateEmail(email.email));
    if (validatePassword(password.password))
      tmpErrors.push(validatePassword(password.password));
    if (validateRPassword(password.password, rPassword.rPassword))
      tmpErrors.push(validateRPassword(password.password, rPassword.rPassword));

    if (tmpErrors.length > 0) {
      setToastErrors(tmpErrors);
      clearToastsErrorsAfter3sec();
    } else {
      const data = {
        name: name.name,
        email: email.email,
        password: password.password,
      };

      axios
        .post("/auth/register", data)
        .then((res) => {
          if (res.status === 200) {
            if (
              res.data.email &&
              res.data.email[0] === "The email has already been taken."
            ) {
              setToastErrors(["?????????? ???????? ???? ?????????? ?????? ?????? ??????"]);
              clearToastsErrorsAfter3sec();
            } else {
              setToastErrors([]);
              onClose();
              setSuccess(true);
            }
          }
        })
        .catch((err) => {
          setToastErrors(["???????????? ???????? ???? ?????? ?????????? ????"]);
          clearToastsErrorsAfter3sec();
          setDisableSubmit(false);
          err && console.error(err);
        });
    }
  };

  const toast = useToast();

  // toasts
  useEffect(() => {
    if (success) {
      if (!toast.isActive("success")) {
        toast({
          status: "success",
          description: "???????? ???????????? ???? ???????????? ?????????? ????",
          id: "success",
          position: "bottom-left",
          duration: 4000,
          isClosable: true,
          icon: <></>,
        });
      }
      setSuccess(false);
    }

    if (toastErrors.length > 0) {
      for (let i = 0; i < toastErrors.length; i++) {
        if (!toast.isActive(i)) {
          toast({
            status: "error",
            description: toastErrors[i],
            id: i,
            position: "bottom-left",
            duration: 4000,
            isClosable: true,
            icon: <></>,
          });
        }
      }
    }
  }, [success, toastErrors, toast]);

  const isNameValid = name.err ? true : false;
  const isEmailValid = email.err ? true : false;
  const isPasswordValid = password.err ? true : false;
  const isRPasswordValid = rPassword.err ? true : false;

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <Box pt={"10px"} pb={"14px"}>
          <Text textAlign={"center"} fontSize="sm" color="gray">
            ???????? ?????????????? ?????? ???? ???? ?????? ???????? ????????????.
          </Text>
        </Box>

        <Box>
          <VStack spacing={"10px"}>
            <FormControl isInvalid={isNameValid}>
              <Input
                value={name.name}
                onChange={handleNameChange}
                onBlur={handleNameBlur}
                placeholder="??????"
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
                value={email.email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                type="email"
                placeholder="??????????"
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
                  value={password.password}
                  onChange={handlePasswordChange}
                  onBlur={handlePasswordBlur}
                  pr="15px"
                  type={showPassword ? "text" : "password"}
                  placeholder="?????? ????????"
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
                  value={rPassword.rPassword}
                  onChange={handleRPasswordChange}
                  onBlur={handleRPasswordBlur}
                  pr="15px"
                  type={showRPassword ? "text" : "password"}
                  placeholder="?????????? ?????? ????????"
                />
                <InputLeftElement width="3.2rem">
                  <Button h="1.75rem" size="sm" onClick={handleSecondEyeClick}>
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
            <Button
              type="submit"
              isDisabled={disableSubmit}
              width={"100%"}
              colorScheme="green"
            >
              ?????? ??????
            </Button>
            <Button
              width={"100%"}
              colorScheme="gray"
              variant={"outline"}
              onClick={onClose}
            >
              ????????????
            </Button>
          </HStack>
        </Box>
      </Box>
    </form>
  );
}
