import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#1A3C40",
    secondary: "#417D7A",
    accent: "#EDE6DB",
    warning: "#eed202",
    success: "#48bb78",
    danger: "#f56565",
    text: "#fff",
  },
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Work Sans, sans-serif",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export default theme;
