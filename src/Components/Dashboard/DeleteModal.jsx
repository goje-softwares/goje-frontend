import {
  Box,
  Button,
  IconButton,
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
import { FiTrash2 } from "react-icons/fi";

export default function DeleteModal({ productName }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <IconButton
        position={"inherit"}
        zIndex={"-100"}
        aria-label="Search database"
        color={"tomato"}
        icon={<FiTrash2 />}
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mt="30vh">
          <ModalHeader></ModalHeader>

          <ModalCloseButton />
          <ModalBody mt={"20px"}>
            {`آیا از حذف "${productName}" مطمئن هستید؟`}
          </ModalBody>
          <ModalFooter display={"flex"} justifyContent="right">
            <Button colorScheme="tomato" mr={3} onClick={onClose}>
              بله
            </Button>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              خیر
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
