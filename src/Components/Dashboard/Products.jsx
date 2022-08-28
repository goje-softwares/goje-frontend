import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import useToasts from "../../Hooks/useToasts";
import { api, APIs } from "../../plugins/api";
import { isDev } from "../../plugins/utils";
import AddProduct from "./AddProduct";
import DeleteModal from "./DeleteModal";
import DescriptionModal from "./DescriptionModal";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { setToasts } = useToasts();

  // TODO: clean code
  useEffect(() => {
    const request = APIs.product.list;
    api(request)
      .then((res) => {
        console.log("gettings products: ", res);
        if (res.status === 200) {
          setProducts(res.data.reverse());
        }
      })
      .catch((err) => {
        if (err && err.code === "ERR_NETWORK") {
          setToasts({ errors: ["ارتباط با سرور برقرار نشد."] });
          if (isDev()) console.error(err);
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      {/* TODO: search for products */}
      <AddProduct products={products} setProducts={setProducts} />
      <hr />
      <Box
        mt={"20px"}
        display={"flex"}
        flexDir="column"
        justifyContent={"center"}
        alignItems="center"
      >
        {products?.length > 0 ? (
          <TableContainer overflowY={"scroll"} height="400px">
            <Table variant="striped" colorScheme="gray">
              <Thead position={"sticky"} top="0" background={"Menu"}>
                <Tr>
                  <Th>ردیف</Th>
                  <Th>نام</Th>
                  <Th>تعداد</Th>
                  <Th>قیمت</Th>
                  <Th>توضیحات</Th>
                  <Th>حذف</Th>
                </Tr>
              </Thead>
              <Tbody>
                {products.map((p, index) => {
                  return (
                    <Tr key={index}>
                      <Td>{index + 1}</Td>
                      <Td>{p.name}</Td>
                      <Td>0</Td>
                      <Td>{p.price}</Td>
                      <Td>
                        {p.description ? (
                          <DescriptionModal description={p.description} />
                        ) : (
                          <Text textAlign={"center"}>...</Text>
                        )}
                      </Td>
                      <Td>
                        <DeleteModal productName={p.name} />
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        ) : (
          // TODO: loader... if not loaded after 3sec then:
          <Text fontSize={".9rem"} color={"gray"}>
            شما هنوز محصولی اضافه نکردید...
          </Text>
        )}
      </Box>
    </Box>
  );
}
