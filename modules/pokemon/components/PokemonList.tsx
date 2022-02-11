import {
  Avatar,
  Box,
  BoxProps,
  CloseButton,
  Flex,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import NextLink from "next/link";
import { LinkItems } from "../../../components/Layout";
import { usePokemonsQuery } from "../../../graphql/generated";
import notEmpty from "../../../utils/notEmpty";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export const PokemonList = ({ onClose, ...rest }: SidebarProps) => {
  const { data, isLoading, error } = usePokemonsQuery({ first: 7 });

  const pokemonRows = useMemo(
    () => data?.pokemons?.filter(notEmpty) ?? [],
    [data?.pokemons]
  );

  if (isLoading) {
    return <Text>"Loading..."</Text>;
  }

  if (error) {
    return <Text>`Error! ${error}`</Text>;
  }

  return (
    <VStack
      bg="#2D2F36"
      padding={16}
      borderTopLeftRadius={{ base: "none", md: "lg" }}
      borderBottomLeftRadius={{ base: "none", md: "lg" }}
      width={{ base: "100%", md: "31.75rem" }}
      spacing={{ base: 4, md: 0 }}
      {...rest}
    >
      <Flex
        justifyContent="flex-end"
        display={{ base: "flex", md: "none" }}
        width="100%"
      >
        <CloseButton color="white" onClick={onClose} />
      </Flex>
      <VStack spacing={4} marginTop={0} width="100%">
        {pokemonRows.map((pokemon) => (
          <NextLink passHref href={`/pokemon/${pokemon.id}`}>
            <Link
              _focus={{ boxShadow: "none" }}
              _hover={{
                textDecoration: "none",
              }}
              width="100%"
            >
              <Flex
                align="center"
                backgroundColor="#3F414B"
                borderRadius="lg"
                color="#EDEDED"
                cursor="pointer"
                p="4"
                role="group"
              >
                <HStack spacing="26px">
                  <Avatar
                    size="md"
                    src={
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                    }
                  />
                  <HStack spacing="10px">
                    <Text color="primary.light">{pokemon.number}</Text>
                    <Text>{pokemon.name}</Text>
                  </HStack>
                </HStack>
              </Flex>
            </Link>
          </NextLink>
        ))}
      </VStack>
    </VStack>
  );
};
