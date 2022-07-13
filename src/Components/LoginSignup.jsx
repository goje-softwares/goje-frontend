import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalBody,
  Box,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  HStack,
} from "@chakra-ui/react";

export default function LoginSignup() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

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
          <ModalBody pt="5">
            <Tabs colorScheme="green" isFitted>
              <TabList>
                <Tab>ورود</Tab>
                <Tab>عضویت</Tab>
              </TabList>
              <TabPanels>
                <TabPanel pl="0" pr="0">
                  <Box>
                    <Box></Box>
                    <Box>
                      <HStack justify={"left"} spacing={"10px"}>
                        <Button colorScheme="green">ورود</Button>
                        <Button
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
