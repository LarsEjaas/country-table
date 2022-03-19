import { gql } from "@apollo/client";

export const COUNTRY_DATA = gql`
  fragment CountryInfo on Country {
    currency
    emoji
    emojiU
    code
    name
    continent {
      name
    }
  }
`;
