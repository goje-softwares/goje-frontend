import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  fonts: {
    heading: `'Vazirmatn', sans-serif`,
    body: `'Vazirmatn', sans-serif`,
  },
  colors: {
    tomato: {
      50: "#ffe4e8",
      100: "#fdb8be",
      200: "#f58b93",
      300: "#ef5d69",
      400: "#e9303e",
      500: "#cf1624",
      600: "#a20f1b",
      700: "#740813",
      800: "#480309",
      900: "#1f0001",
    },
  },
  config,
});

export default theme;
