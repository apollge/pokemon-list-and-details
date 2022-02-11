import { Box } from "@chakra-ui/react";
import React, { useMemo } from "react";
import Layout from "../components/Layout";
import { usePokemonsQuery } from "../graphql/generated";
import PokemonDetails from "../modules/pokemon/components/PokemonDetails";
import notEmpty from "../utils/notEmpty";

const Main = () => (
  <Layout>
    <PokemonDetails />
  </Layout>
);

export default Main;
