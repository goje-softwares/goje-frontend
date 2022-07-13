import React from "react";
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

export default function Home() {

  const color = useColorModeValue('tomato.500', 'tomato.400');

  return (
    <Box mt="140px" textAlign={"center"}>
      <Heading fontSize="5xl" color={color}>
        گـوجـه
      </Heading>
      <Text mt={"20px"}>به زودی...</Text>
      <Text mt={"40px"} mr={"30px"} ml={'30px'}>
        گوجه خودشم هنوز دقیق نمیدونه چیه ولی قراره تو حساب کتابات بهت کمک کنه ;)
      </Text>
    </Box>
  );
}
