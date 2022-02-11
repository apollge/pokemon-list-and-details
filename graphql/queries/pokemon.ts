import { gql } from "graphql-request";

export const PokemonQuery = gql`
  query Pokemon($id: String) {
    pokemon(id: $id) {
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
