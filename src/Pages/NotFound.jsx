import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { home } from "../Global/Routes";

export default function NotFound() {
  return (
    <Box
      display={"flex"}
      flexDir="column"
      alignItems={"center"}
      justifyContent={"center"}
      mt="160px"
      textAlign={"center"}
    >
      <Heading fontSize="5xl">404</Heading>
      <Text mt={"10px"}>صفحه مورد نظر یافت نشد</Text>
      <Text mt={"40px"} mr={"30px"} ml={"30px"}>
        <Link to={home}>برو به صفحه اصلی</Link>
      </Text>
    </Box>
  );
}
