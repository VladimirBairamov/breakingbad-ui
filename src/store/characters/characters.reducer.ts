import {
  CHARACTER_GET_ONE,
  CHARACTER_GET_ONE_ERROR,
  CHARACTER_GET_ONE_SUCCESS,
  CharactersActionTypes,
  ICharactersState,
} from './characters.types';
import produce from 'immer';
import { RequestState } from '../common.types';

const initialState: ICharactersState = {
  currentCharacter: null,
  characterByIdGetState: null,
  characterByIdGetError: null,
};

const CountryReducer = (state = initialState, action: CharactersActionTypes) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CHARACTER_GET_ONE:
        draft.characterByIdGetState = RequestState.Loading;
        break;

      case CHARACTER_GET_ONE_ERROR:
        draft.characterByIdGetState = RequestState.Error;
        draft.characterByIdGetError = action.payload;
        break;

      case CHARACTER_GET_ONE_SUCCESS:
        draft.characterByIdGetState = RequestState.Success;
        draft.characterByIdGetError = null;
        draft.currentCharacter = action.payload;
        break;
    }
  });

export default CountryReducer;
