/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { EuiBasicTableColumn, EuiLoadingContent } from "@elastic/eui";
import { ICountry } from "../../data";
import Twemoji from "react-twemoji";

export const columns: EuiBasicTableColumn<ICountry>[] = [
  {
    field: "emojiU",
    name: "Flag",
    sortable: false,
    truncateText: true,
    render: (flag: string) => {
      const emoji = flag.replaceAll("U+", "&#x");
      const emojiSingleCode = emoji.replaceAll(" ", ";");
      return (
        <Twemoji options={{ className: "twemoji" }}>
          <p dangerouslySetInnerHTML={{ __html: emojiSingleCode }} />
        </Twemoji>
      );
    },
  },
  {
    field: "name",
    name: "Country Name",
    sortable: true,
    truncateText: true,
  },
  {
    field: "continent.name",
    name: "Continent",
    sortable: true,
    truncateText: true,
  },
  {
    field: "code",
    name: "ISO Code",
    sortable: true,
    truncateText: false,
  },
  {
    field: "currency",
    name: "Currency",
    sortable: true,
    truncateText: false,
  },
];

export const SkeletonColumns: EuiBasicTableColumn<ICountry>[] = [
  {
    field: "emojiU",
    name: "Flag",
    sortable: false,
    render: () => (
      <EuiLoadingContent
        lines={1}
        css={css`
          height: 3em;
          width: 3em;
          margin: 0 0.05em 0 0.1em;
          vertical-align: -0.1em;
          .euiLoadingContent__singleLine {
            height: 100%;
          }
        `}
      />
    ),
    truncateText: false,
  },
  {
    field: "name",
    name: "Country Name",
    sortable: true,
    render: () => (
      <EuiLoadingContent
        lines={1}
        css={css`
          width: 90%;
        `}
      />
    ),
    truncateText: true,
  },
  {
    field: "continent.name",
    name: "Continent",
    sortable: true,
    render: () => (
      <EuiLoadingContent
        lines={1}
        css={css`
          width: 90%;
        `}
      />
    ),
    truncateText: true,
  },
  {
    field: "code",
    name: "ISO Code",
    sortable: true,
    render: () => (
      <EuiLoadingContent
        lines={1}
        css={css`
          width: 90%;
        `}
      />
    ),
    truncateText: false,
  },
];

export const skeletonData: ICountry[] = Array(10).fill({
  emojiU: "",
  name: "",
  continent: { name: "" },
  code: "",
});

interface ISorting {
  sort: {
    field: string;
    direction: "asc" | "desc";
  };
}

export const sorting: ISorting = {
  sort: {
    field: "countryName",
    direction: "desc",
  },
};
