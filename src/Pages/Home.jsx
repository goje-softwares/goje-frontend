import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box mt="40" textAlign={"center"}>
      <Heading fontSize="5xl" color="tomato">
        گـوجـه
      </Heading>
      <Text mt={"5"}>به زودی...</Text>
      <Text mt={"10"}>
        گوجه خودشم هنوز دقیق نمیدونه چیه ولی قراره تو حساب کتابات بهت کمک کنه ;)
      </Text>
    </Box>
  );
}
