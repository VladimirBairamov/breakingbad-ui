import { ICharactersState } from './characters/characters.types';
import { IEpisodesState } from './episodes/episodes.types';

export enum RequestState {
  Loading,
  Saving,
  Success,
  Error,
}

export interface AppStore {
  episodes: IEpisodesState;
  characters: ICharactersState;
}
