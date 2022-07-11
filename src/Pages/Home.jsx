import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box mt="140px" textAlign={"center"}>
      <Heading fontSize="5xl" color="tomato">
        گـوجـه
      </Heading>
      <Text mt={"20px"}>به زودی...</Text>
      <Text mt={"40px"} mr={"30px"} ml={'30px'}>
        گوجه خودشم هنوز دقیق نمیدونه چیه ولی قراره تو حساب کتابات بهت کمک کنه ;)
      </Text>
    </Box>
  );
}
