import { Spinner as ChakraSpinner } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import React from "react";

const Spinner = () => {
  return (
    <Flex alignItems="center" height="100%" justify="center" width="100%">
      <ChakraSpinner color="secondary.light" />
    </Flex>
  );
};

export default Spinner;
