import { gql } from "@apollo/client";
import { COUNTRY_DATA } from "./countryData.fragment";

export const GET_COUNTRIES = gql`
  query GetCountryList {
    countries {
      ...CountryInfo
    }
  }
  ${COUNTRY_DATA}
`;
