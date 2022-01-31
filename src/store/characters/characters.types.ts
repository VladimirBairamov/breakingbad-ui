import { RequestState } from '../common.types';

export interface ICharacter {
  id: number;
  name: string;
  birthday: string;
  occupation: string[];
  img: string;
  status: string;
  nickname: string;
  appearance: string[];
  portrayed: string;
  category: string[];
}

export interface ICharactersState {
  currentCharacter: ICharacter | null;
  characterByIdGetState: RequestState | null;
  characterByIdGetError: string | null;
}

export const CHARACTER_GET_ONE = 'CHARACTER_GET_ONE';
export const CHARACTER_GET_ONE_SUCCESS = 'CHARACTER_GET_ONE_SUCCESS';
export const CHARACTER_GET_ONE_ERROR = 'CHARACTER_GET_ONE_ERROR';

// Get One Episode
export interface CharacterGetOneAction {
  type: typeof CHARACTER_GET_ONE;
  payload: string;
}

export interface CharacterGetOneSuccessAction {
  type: typeof CHARACTER_GET_ONE_SUCCESS;
  payload: ICharacter;
}

export interface CharacterGetOneErrorAction {
  type: typeof CHARACTER_GET_ONE_ERROR;
  payload: any;
}

export type CharactersActionTypes =
  | CharacterGetOneAction
  | CharacterGetOneSuccessAction
  | CharacterGetOneErrorAction;
