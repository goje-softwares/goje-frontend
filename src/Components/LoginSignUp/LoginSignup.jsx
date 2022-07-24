import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import LoginProvider from "./Providers/LoginProvider";
import RegisterProvider from "./Providers/RegisterProvider";

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
          <ModalCloseButton />
          <ModalBody pt="40px">
            <Tabs colorScheme="green" isFitted>
              <TabList>
                <Tab>ورود</Tab>
                <Tab>عضویت</Tab>
              </TabList>
              <TabPanels>
                <TabPanel pl="0" pr="0">
                  <LoginProvider onClose={onClose} />
                </TabPanel>
                <TabPanel pl="0" pr="0">
                  <RegisterProvider onClose={onClose} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
