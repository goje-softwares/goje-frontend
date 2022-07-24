import React from "react";
import {
  Link,
  InputGroup,
  InputLeftElement,
  HStack,
  FormControl,
  FormErrorMessage,
  VStack,
  Input,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
export default function Login({ props }) {
  const [
    onClose,
    show,
    handleClick,
    email,
    handleEmailChange,
    handleEmailBlur,
  ] = props;

  return (
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
              onBlur={handleEmailBlur}
              placeholder="ایمیل"
              size="md"
            />
            {email.err ? (
              <FormErrorMessage>{email.err}</FormErrorMessage>
            ) : (
              <></>
            )}
          </FormControl>
          <InputGroup size="md">
            <Input
              pr="15px"
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
          <Button width={"100%"} colorScheme="green">
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
  );
}
