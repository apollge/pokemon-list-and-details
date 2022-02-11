import {
  Avatar,
  BoxProps,
  CloseButton,
  Flex,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useMemo } from "react";
import { usePokemonsQuery } from "../../../graphql/generated";
import notEmpty from "../../../utils/notEmpty";
import Spinner from "../../common/Spinner";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export const PokemonList = ({ onClose, ...rest }: SidebarProps) => {
  const { data, isLoading, error } = usePokemonsQuery({ first: 7 });

  const pokemonRows = useMemo(
    () => data?.pokemons?.filter(notEmpty) ?? [],
    [data?.pokemons]
  );

  if (error) {
    return <Text>`Error! ${error}`</Text>;
  }

  return (
    <VStack
      bg="#2D2F36"
      borderBottomLeftRadius={{ base: "none", md: "lg" }}
      borderTopLeftRadius={{ base: "none", md: "lg" }}
      height="100%"
      overflowY="auto"
      padding={{ base: "1rem", lg: 16 }}
      spacing={{ base: 4, md: 0 }}
      width={{ base: "100%", lg: "31.75rem" }}
      {...rest}
    >
      <Flex
        justifyContent="flex-end"
        display={{ base: "flex", md: "none" }}
        width="100%"
      >
        <CloseButton color="white" onClick={onClose} />
      </Flex>
      {isLoading ? (
        <Spinner />
      ) : (
        <VStack spacing={4} marginTop={0} width="100%">
          {pokemonRows.map((pokemon) => (
            <NextLink passHref href={`/pokemon/${pokemon.id}`}>
              <Link
                _focus={{ boxShadow: "none" }}
                _hover={{
                  textDecoration: "none",
                }}
                onClick={onClose}
                width="100%"
              >
                <Flex
                  align="center"
                  backgroundColor="#3F414B"
                  borderRadius="lg"
                  color="secondary.light"
                  cursor="pointer"
                  p="4"
                  role="group"
                >
                  <HStack spacing="26px">
                    <Avatar size="md" src={pokemon.image ?? ""} />
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
      )}
    </VStack>
  );
};
