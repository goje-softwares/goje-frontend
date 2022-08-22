import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { dashboard, products } from "../../Global/Routes";
import Logo from "../Logo";

export default function Sidebar() {
  return (
    <Box height="100vh" borderRight={"1px soild gray"} w={"20%"} id="side-bar">
      <Box
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
        <UnorderedList>
          <ListItem>
            <Link to={products}>محصول</Link>
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
}
