import {
  Avatar,
  Box,
  Flex,
  List,
  ListItem,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { usePokemonQuery } from "../../../graphql/generated";
import { validateQueryId } from "../../../utils/validateQueryId";
import Spinner from "../../common/Spinner";

const PokemonDetails = () => {
  const router = useRouter();

  const { data, isLoading, error } = usePokemonQuery(
    {
      id: validateQueryId(router.query.pokemonId),
    },
    {
      enabled: !!validateQueryId(router.query.pokemonId),
    }
  );

  const pokemon = data?.pokemon;

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Text>`Error! ${error}`</Text>;
  }

  return (
    <>
      <header>
        <Flex
          borderBottom="2px solid #2D2F36"
          minHeight={{ base: "initial", md: "8rem" }}
          padding={{ base: "1rem", md: "2.625rem" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontSize="2rem" color="secondary.light" isTruncated>
            {pokemon?.name}
          </Text>
          <Text fontSize="2rem" color="primary.light" isTruncated>
            #{pokemon?.number}
          </Text>
        </Flex>
      </header>
      <section>
        <Box padding="2.625rem">
          <VStack spacing={12} color="secondary.light">
            <Avatar
              size="2xl"
              src={pokemon?.image ?? ""}
              borderColor="primary.light"
              borderWidth={3}
            />

            <SimpleGrid columns={2} spacing={10}>
              <List spacing={2}>
                <ListItem fontWeight="bold" isTruncated>
                  Classification
                </ListItem>
                <ListItem>Weight Min.</ListItem>
                <ListItem>Weight Max.</ListItem>
                <ListItem>Height Min.</ListItem>
                <ListItem>Height Max.</ListItem>
              </List>
              <List spacing={2}>
                <ListItem fontWeight="bold" isTruncated>
                  {pokemon?.classification}
                </ListItem>
                <ListItem>{pokemon?.weight?.minimum}</ListItem>
                <ListItem>{pokemon?.weight?.maximum}</ListItem>
                <ListItem>{pokemon?.height?.minimum}</ListItem>
                <ListItem>{pokemon?.height?.maximum}</ListItem>
              </List>
            </SimpleGrid>
          </VStack>
        </Box>
      </section>
    </>
  );
};

export default PokemonDetails;
