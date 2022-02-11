import { gql } from "graphql-request";

export const Pokemons = gql`
  query Pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      image
      classification
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
    }
  }
`;
