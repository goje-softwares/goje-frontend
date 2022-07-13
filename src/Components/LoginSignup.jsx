import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalBody,
  ModalCloseButton,
  Box,
  Link,
  InputGroup,
  InputLeftElement,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  HStack,
  VStack,
  Input,
  Text,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

export default function LoginSignup() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Box>
        <Button onClick={onOpen} colorScheme={"green"} variant="outline">
          ورود/عضویت
        </Button>
      </Box>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pt="40px">
            <Tabs colorScheme="green" isFitted>
              <TabList>
                <Tab>ورود</Tab>
                <Tab>عضویت</Tab>
              </TabList>
              <TabPanels>
                <TabPanel pl="0" pr="0">
                  <Box>
                    <Box pt={"10px"} pb={"14px"}>
                      <Text textAlign={"center"} fontSize="sm" color="gray">
                        لطفا نام کاربری و رمز عبور خود را وارد کنید.
                      </Text>
                    </Box>
                    <Box>
                      <VStack spacing={"10px"}>
                        <Input placeholder="نام کاربری" size="md" />
                        <InputGroup size="md">
                          <Input
                            pr="15px"
                            type={show ? "text" : "password"}
                            placeholder="رمز ورود"
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
                </TabPanel>
                <TabPanel></TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
