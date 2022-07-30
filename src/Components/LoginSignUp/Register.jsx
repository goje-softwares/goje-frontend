import React, { useEffect } from "react";
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

import { toastConfig } from "../../Global/toastConfig";

// eslint-disable-next-line react/prop-types
export default function Register({ props }) {
  const [
    onClose,
    showPassword,
    handleEyeClick,
    showRPassword,
    handleSecondEyeClick,
    name,
    handleNameChange,
    handleNameBlur,
    email,
    handleEmailChange,
    handleEmailBlur,
    password,
    handlePasswordChange,
    handlePasswordBlur,
    rPassword,
    handleRPasswordChange,
    handleRPasswordBlur,
    handleSubmit,
    toastErrors,
    success,
    setSuccess,
    disableSubmit,
  ] = props;

  const toast = useToast();

  // toasts
  useEffect(() => {
    if (success) {
      if (!toast.isActive("success")) {
        toast({
          status: "success",
          description: "حساب کاربری با موفقیت ایجاد شد",
          id: "success",
          ...toastConfig,
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
            ...toastConfig,
          });
        }
      }
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <Box pt={"10px"} pb={"14px"}>
          <Text textAlign={"center"} fontSize="sm" color="gray">
            لطفا اطلاعات زیر را با دقت وارد نمایید.
          </Text>
        </Box>

        <Box>
          <VStack spacing={"10px"}>
            <FormControl isInvalid={name.err}>
              <Input
                value={name.name}
                onChange={handleNameChange}
                onBlur={handleNameBlur}
                placeholder="نام"
                size="md"
              />
              {name.err ? (
                <FormErrorMessage>{name.err}</FormErrorMessage>
              ) : (
                <></>
              )}
            </FormControl>

            <FormControl isInvalid={email.err}>
              <Input
                value={email.email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
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
              <FormControl isInvalid={password.err}>
                <Input
                  value={password.password}
                  onChange={handlePasswordChange}
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

            <FormControl isInvalid={rPassword.err}>
              <InputGroup size="md">
                <Input
                  value={rPassword.rPassword}
                  onChange={handleRPasswordChange}
                  onBlur={handleRPasswordBlur}
                  pr="15px"
                  type={showRPassword ? "text" : "password"}
                  placeholder="تکرار رمز عبور"
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
              ثبت نام
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
