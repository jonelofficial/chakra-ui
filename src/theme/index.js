import { extendTheme } from "@chakra-ui/react";
const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};
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
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});

export default theme;
