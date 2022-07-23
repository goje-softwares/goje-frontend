import React from "react";
import {
  FormControl,
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
export default function Login({ onClose }) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [show2, setShow2] = React.useState(false);
  const handleClick2 = () => setShow2(!show2);

  return (
    <Box>
      <Box pt={"10px"} pb={"14px"}>
        <Text textAlign={"center"} fontSize="sm" color="gray">
          لطفا اطلاعات زیر را با دقت وارد نمایید.
        </Text>
      </Box>
      <Box>
        <VStack spacing={"10px"}>
          <Input placeholder="نام" size="md" />
          <FormControl>
            <Input type="email" placeholder="ایمیل" />
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
          <InputGroup size="md">
            <Input
              pr="15px"
              type={show2 ? "text" : "password"}
              placeholder="تکرار رمز عبور"
            />
            <InputLeftElement width="3.2rem">
              <Button h="1.75rem" size="sm" onClick={handleClick2}>
                <ViewIcon />
              </Button>
            </InputLeftElement>
          </InputGroup>
        </VStack>
      </Box>
      <Box pt="20px">
        <HStack
          display={"flex"}
          justifyContent="space-around"
          justify={"left"}
          spacing={"10px"}
        >
          <Button width={"100%"} colorScheme="green">
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
  );
}
