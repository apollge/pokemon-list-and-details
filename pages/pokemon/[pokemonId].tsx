import { useRouter } from "next/router";
import React, { FC } from "react";
import { usePokemonQuery } from "../../graphql/generated";
import { validateQueryId } from "../../utils/validateQueryId";

const Pokemon = () => {
  const router = useRouter();

  const { data, isLoading, error } = usePokemonQuery({
    id: validateQueryId(router.query.pokemonId),
  });

  const pokemon = data?.pokemon;

  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return `Error! ${error}`;
  }

  if (!data) {
    return "Pokemon not found";
  }

  return <div>{pokemon?.name}</div>;
};

export default Pokemon;
