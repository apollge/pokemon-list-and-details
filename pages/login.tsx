import { Box, Flex } from "@chakra-ui/react";
import React, { FC } from "react";
import LoginForm from "../modules/user/components/LoginForm";

const Login: FC = () => {
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg="#1C1D1F">
      <Box
        bg="#2D2F36"
        height="100%"
        maxHeight="28.6875rem"
        maxWidth={{ base: "22.5rem", md: "31.75rem" }}
        mx={"auto"}
        padding={{ base: "1.875rem", md: "6.6875rem 4rem 6.1875rem" }}
        rounded={"lg"}
        width="100%"
      >
        <LoginForm />
      </Box>
    </Flex>
  );
};

export default Login;
