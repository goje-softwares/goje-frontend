import React, { useEffect } from "react";
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
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
export default function Login({ props }) {
  const [
    onClose,
    show,
    handleClick,
    email,
    handleEmailChange,
    password,
    handlePasswordChange,
    disableSubmit,
    toastErrors,
    handleSubmit,
    success,
    setSuccess
  ] = props;

  const toast = useToast();

  // toasts
  useEffect(() => {
// TODO: make a toastsConfis.js file
    if (success) {
      if (!toast.isActive("success")) {
        toast({
          description: "با موفقیت وارد شدید",
          status: "success",
          duration: 5000,
          isClosable: true,
          icon: <></>,
          id: "success",
          position: "bottom-left",
        });
        setSuccess(false);
      }
    }

    if (toastErrors.length > 0) {
      for (let i = 0; i < toastErrors.length; i++) {
        if (!toast.isActive(i)) {
          toast({
            description: toastErrors[i],
            status: "error",
            duration: 4000,
            isClosable: true,
            icon: <></>,
            id: i,
            position: "bottom-left",
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
            <Button type="submit" disabled={disableSubmit} width={"100%"} colorScheme="green">
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