import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import useToasts from "../../Hooks/useToasts";
import { api, APIs } from "../../plugins/api";
import { isDev } from "../../plugins/utils";
import AddProduct from "./AddProduct";

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
  }, []);

  return (
    <Box>
      <AddProduct products={products} setProducts={setProducts} />
      <Box>
        {products?.length > 0 ? (
          products.map((p, index) => {
            return (
              <Box key={index}>
                {p.name}, {p.price}
              </Box>
            );
          })
        ) : (
          <Text fontSize={".9rem"} color={"gray"}>
            شما هنوز محصولی اضافه نکردید...
          </Text>
        )}
      </Box>
    </Box>
  );
}
