export const columns = [
  {
    field: "emojiU",
    name: "Flag",
    sortable: false,
    truncateText: false,
  },
  {
    field: "name",
    name: "Country Name",
    sortable: true,
    truncateText: true,
  },
  {
    field: "continent",
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
];

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
