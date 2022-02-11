import { ComponentMultiStyleConfig } from "@chakra-ui/react";

const FormTheme: ComponentMultiStyleConfig = {
  parts: ["input"],
  baseStyle: {
    ["formControl"]: {
      _invalid: {
        borderColor: "#E53E3E",
        boxShadow: "transparent",
      },
    },
    ["input"]: {
      backgroundColor: "#3F414B",
      borderColor: "transparent",
      color: "white",
      fontSize: "1.125rem",
      minHeight: "3.75rem",
      _focus: {
        boxShadow: "none",
      },
      _hover: {
        borderColor: "primary.light",
      },
    },
    ["submitButton"]: {
      _hover: {
        bg: "primary.dark",
      },
      bg: "primary.light",
      color: "white",
      fontSize: "1.125rem",
      minHeight: "3.75rem",
    },
  },
};

export default FormTheme;
