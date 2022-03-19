import { gql } from "@apollo/client";
import { COUNTRY_DATA } from "./CountryData.fragment";

export const GET_COUNTRIES = gql`
  query GetCountryList {
    countries {
      ...CountryInfo
    }
  }
  ${COUNTRY_DATA}
`;
