import React from "react";
import { ChakraProvider, Text, Heading } from "@chakra-ui/react";
import theme from "./Global/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Heading>Head سر 123654</Heading>
        <Text>Hello World سلام دنیا  ۱۲۳۴۴</Text>
      </div>
    </ChakraProvider>
  );
}

export default App;
