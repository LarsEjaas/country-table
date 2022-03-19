export interface ICountryData {
  countries: ICountry[];
}

interface ICountry {
  code: string;
  name: string;
  native: string;
  phone: string;
  continent: IContinent;
  capital?: string;
  currency?: string;
  languages: ILanguage[];
  emoji: string;
  emojiU: string;
  states: IState[];
}

interface IContinent {
  code: string;
  name: string;
  countries: ICountry[];
}

interface ILanguage {
  code: string;
  name: string;
  native: string;
  rtl: boolean;
}

interface IState {
  code?: string;
  name: string;
  country: ICountry;
}
