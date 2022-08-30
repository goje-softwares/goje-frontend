import { Box, UnorderedList, ListItem, Icon } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { dashboard, products } from "../../Global/Routes";
import Logo from "../Logo";
import { FiPackage } from "react-icons/fi";

export default function Sidebar() {
  return (
    <Box
      id="side-bar"
      display={"flex"}
      flexDir="column"
      height="auto"
      color={"white"}
      bg={"gray.900"}
      w={"20%"}
    >
      <Box
        bg={"blackAlpha.400"}
        id="side-bar-header"
        display={"flex"}
        justifyContent="center"
        pt={"15px"}
        pb={"15px"}
      >
        <Link to={dashboard}>
          <Logo boxSize="3rem" />
        </Link>
      </Box>
      <Box id="items">
        <UnorderedList m="0" p={"0"} fontSize={"1.1rem"}>
          <Link to={products}>
            <ListItem
              id="productItem"
              className="listItem"
              display={"flex"}
              alignItems={"center"}
              p="5px"
              _hover={{
                background: "whiteAlpha.200",
              }}
            >
              <Icon color={"tomato.400"} as={FiPackage} mr="10px" ml={"6px"} />
              محصولات
            </ListItem>
          </Link>
        </UnorderedList>
      </Box>
    </Box>
  );
}
