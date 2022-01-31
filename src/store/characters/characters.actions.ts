import {
  ICharacter,
  CHARACTER_GET_ONE,
  CHARACTER_GET_ONE_SUCCESS,
  CHARACTER_GET_ONE_ERROR,
} from './characters.types';

// Get One Character
export const characterGetOne = (payload: string) => ({
  type: CHARACTER_GET_ONE,
  payload: payload,
});

export const characterGetOneSuccess = (payload: ICharacter) => ({
  type: CHARACTER_GET_ONE_SUCCESS,
  payload: payload,
});

export const characterGetOneError = (error: any) => ({
  type: CHARACTER_GET_ONE_ERROR,
  payload: error,
});
