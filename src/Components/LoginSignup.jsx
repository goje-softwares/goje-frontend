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
} from "@chakra-ui/react";

export default function LoginSignup() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Box>
        <Button
          onClick={onOpen}
          colorScheme={"green"}
          variant="outline"
        >
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
          <ModalBody p="5">
            <Tabs colorScheme="green" isFitted>
              <TabList>
                <Tab>ورود</Tab>
                <Tab>عضویت</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <p>لاگین</p>
                </TabPanel>
                <TabPanel>
                  <p>ساین آپ</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
