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
    lightGray: "#FAF8F8",
    tomato: "#CD1624",
    tomatoLight: "#EC4A57",
    tomatoVeryLight: "#F4929A",
    grass: "#006F57",
  },
  config,
});

export default theme;
