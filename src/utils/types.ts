export type cardItem = {
  name: string;
  page?: JSX.Element;
  path: string;
  element?: JSX.Element;
};

export type ResponseInfo = {
  count: number;
  pages: number;
  next: NullableString;
  prev: NullableString;
};

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episod: number[];
};

export type CharactersData = {
  info: ResponseInfo;
  results: CharacterResult[];
};

export type CharacterResult = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episod: string[];
  url: string;
  created: string;
};

export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: number[];
};

export type LocationsData = {
  info: ResponseInfo;
  result: LocationResult[];
};

export type LocationResult = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: number[];
};

export type EpisodesData = {
  info: ResponseInfo;
  result: EpisodesResult[];
};

export type EpisodesResult = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export type NullableString = string | null;
export type CharacterStatus = 'alive' | 'dead' | 'unknown'