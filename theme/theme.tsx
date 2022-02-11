import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import FormTheme from "./formTheme";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  breakpoints,
  colors: {
    primary: {
      light: "#F2C94C",
      dark: "#EFBB1C",
    },
    alert: {
      warning: "#E53E3E",
    },
  },
  components: {
    FormTheme,
  },
  config,
  fonts: {
    heading: "Open Sans",
    body: "Open Sans",
  },
  styles: {
    body: {
      color: "white",
    },
  },
});

export default theme;
