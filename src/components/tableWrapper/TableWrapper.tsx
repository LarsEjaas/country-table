import { OperationVariables } from "@apollo/client";
import { useQuery } from "@apollo/client/react/hooks";
import { GET_COUNTRIES, ICountryData } from "@app/data";
import { CountryTable } from "../countryTable/CountryTable";

export const TableWrapper = (): JSX.Element => {
  const { loading, error, data } = useQuery<ICountryData, OperationVariables>(
    GET_COUNTRIES
  );

  if (loading) return <p>...Loading</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  return <div className="wrapper">{data && <CountryTable data={data} />}</div>;
};
