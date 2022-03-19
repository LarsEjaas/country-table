/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ICountryData } from "../../data";
import { EuiInMemoryTable, useEuiTheme } from "@elastic/eui";
import { columns, SkeletonColumns, skeletonData, sorting } from "./tableSetup";

export const CountryTable = ({
  data,
  error,
  loading,
}: {
  data: ICountryData | undefined;
  error: string | undefined;
  loading: boolean;
}): JSX.Element => {
  const { euiTheme } = useEuiTheme();
  return (
    <>
      <EuiInMemoryTable
        tableCaption="Table of countries"
        items={data?.countries || skeletonData}
        error={error}
        loading={loading}
        columns={loading ? SkeletonColumns : columns}
        pagination={true}
        sorting={sorting}
        css={css`
          max-width: 800px;
          width: calc(100vw - 2rem);
          border: ${euiTheme.border.thick};
          border-radius: ${euiTheme.border.radius.small};
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          //padding on pagination and rows selector
          .euiFlexGroup--gutterSmall {
            padding: 4px;
          }
          //vertical padding on headerCells
          .euiTableHeaderCell {
            padding: 4px 0;
          }
          //padding on mobile header
          .euiTableHeaderMobile {
            padding: 8px;
          }
        `}
      />
    </>
  );
};
