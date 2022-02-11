import {
  Box,
  Button,
  FormControl,
  Input,
  useMultiStyleConfig,
  VStack,
} from "@chakra-ui/react";
import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { UserSchema, userSchema } from "../validations/userSchema";

const LoginForm: FC = () => {
  const router = useRouter();
  const styles = useMultiStyleConfig("FormTheme", undefined);

  const form = useForm({
    resolver: zodResolver(userSchema),
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = form;

  function onSubmit() {
    void router.push("main");
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing="1.75rem" marginBottom="2.8125rem">
          <FormControl isInvalid={errors.username}>
            <Input
              {...register("username")}
              focusBorderColor="primary.light"
              id="username"
              placeholder="Username"
              sx={styles["input"]}
            />
            <Box color="alert.warning">
              <ErrorMessage errors={errors} name="username" />
            </Box>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <Input
              {...register("password")}
              focusBorderColor="primary.light"
              id="password"
              placeholder="********"
              sx={styles["input"]}
              type="password"
            />
            <Box color="alert.warning">
              <ErrorMessage errors={errors} name="password" />
            </Box>
          </FormControl>
        </VStack>
        <Button
          isLoading={isSubmitting}
          textTransform="uppercase"
          sx={styles["submitButton"]}
          type="submit"
          w="100%"
        >
          Login
        </Button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
