import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

export default function DescriptionModal({ description }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button
        disabled={description === null}
        position={"inherit"}
        zIndex={"-100"}
        onClick={onOpen}
      >
        توضیحات
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody mt={"20px"}>{description}</ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              بستن
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
