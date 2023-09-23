export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface PartialLocation extends Pick<Location, 'name' | 'url'> {}

export type Status = 'Alive' | 'Dead' | 'unknown';

export type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown';

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: PartialLocation;
  location: PartialLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

