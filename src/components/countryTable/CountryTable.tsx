import { ICountryData } from "@app/data";
import { EuiInMemoryTable } from "@elastic/eui";
import { columns, sorting } from "./tableSetup";

export const CountryTable = ({ data }: { data: ICountryData }): JSX.Element => {
  //const { euiTheme } = useEuiTheme();

  console.log(data);

  return (
    <>
      <EuiInMemoryTable
        tableCaption="Table of countries"
        items={data.countries}
        columns={columns}
        pagination={true}
        sorting={sorting}
      />
    </>
  );
};
