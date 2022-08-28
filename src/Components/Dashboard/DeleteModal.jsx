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
import useToasts from "../../Hooks/useToasts";
import { api, APIs } from "../../plugins/api";
import { isDev } from "../../plugins/utils";

export default function DeleteModal({
  productName,
  productId,
  products,
  setProducts,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setToasts } = useToasts();

  const handleClick = () => {
    const request = APIs.product.delete;
    request.url = "products/destroy/" + productId;
    api(request)
      .then((res) => {
        if (res.status === 200 || res.data[0] === "success") {
          setToasts({ successes: [res.data.message] });
          // delete from app state too
          console.log(products);
          const tmpNewProducts = products.filter((p) => p.id !== productId);
          setProducts(tmpNewProducts);
          onClose();
        }
        if (isDev()) console.log(res);
      })
      //TODO: DRY dont repeat you self + add product and other .then(errs)...
      .then((err) => {
        if (isDev()) console.error(err);
        if (err) {
          if (err.code === "ERR_NETWORK") {
            setToasts({ errors: ["ارتباط با سرور برقرار نشد."] });
          } else {
            if (err) {
              setToasts({ errors: ["خطا"] });
              if (isDev()) console.error(err);
            }
          }
        }
      });
  };

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
