import React from "react";
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import Logo from "../Components/Logo";
import Navbar from "../Components/Navbar";

export default function Home() {
  const color = useColorModeValue("tomato.500", "tomato.400");

  return (
    <>
      <Navbar />
      <Box
        display={"flex"}
        flexDir="column"
        alignItems={"center"}
        justifyContent={"center"}
        mt="110px"
        textAlign={"center"}
      >
        <Logo boxSize="6em" />
        <Heading fontSize="5xl" color={color}>
          گـوجـه
        </Heading>
        <Text mt={"20px"}>به زودی...</Text>
        <Text mt={"40px"} mr={"30px"} ml={"30px"}>
          گوجه خودشم هنوز دقیق نمیدونه چیه ولی قراره تو حساب کتابات بهت کمک کنه
          ;)
        </Text>
      </Box>
    </>
  );
}
