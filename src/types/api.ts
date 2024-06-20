export type Info = {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export type Locations = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: Date;
}

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'unknown'
}

export type Location = {
  name: string;
  url: string;
}

export enum Species {
  Alien = 'Alien',
  Human = 'Human'
}

export enum Status {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}

export type Characters = {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: string;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export type RickMortyCharacters = {
  info: Info;
  results: Characters[];
}

export type RickMortyLocations = {
  info: Info
  results: Locations[]
}
