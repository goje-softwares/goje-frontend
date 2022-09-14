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
import useNotifs from "../../Hooks/useNotifs";
import { api, APIs } from "../../plugins/api";
import { handleApiErrors, isDev } from "../../plugins/utils";

export default function DeleteModal({
  productName,
  productId,
  products,
  setProducts,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setNotifs } = useNotifs();

  const handleClick = () => {
    onClose();
    const request = APIs.product.delete;
    request.url = "products/destroy/" + productId;
    api(request)
      .then((res) => {
        if (res.status === 200 || res.data[0] === "success") {
          setNotifs({ successes: [res.data.message] });
          const tmpNewProducts = products.filter((p) => p.id !== productId);
          setProducts(tmpNewProducts);
        }
        if (isDev()) console.log(res);
      })
      .catch((err) => {
        handleApiErrors(err, setNotifs);
      });
  };

  return (
    <Box>
      <IconButton
        id={`deleteButton${productId}`}
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
            <Button colorScheme="tomato" mr={3} onClick={handleClick}>
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
