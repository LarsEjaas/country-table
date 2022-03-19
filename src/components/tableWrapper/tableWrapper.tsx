/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { OperationVariables } from "@apollo/client";
import { useQuery } from "@apollo/client/react/hooks";
import { GET_COUNTRIES, ICountryData } from "../../data";
import { CountryTable } from "../countryTable/countryTable";

export const TableWrapper = (): JSX.Element => {
  const { data, error, loading } = useQuery<ICountryData, OperationVariables>(
    GET_COUNTRIES
  );

  const errorMessage = error
    ? "An error occured while loading the country data. Please try reloading the page to refetch the data."
    : undefined;
  if (error) {
    console.error(error);
  }

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 100px 0;
        .twemoji {
          height: 3em;
          width: 3em;
          margin: 0 0.05em 0 0.1em;
          vertical-align: -0.1em;
        }
      `}
    >
      <CountryTable data={data} loading={loading} error={errorMessage} />
    </div>
  );
};
