import { all, call, put, takeLatest } from 'redux-saga/effects';
import charactersService from 'services/characters.service';
import { characterGetOneError, characterGetOneSuccess } from './characters.actions';
import { CharacterGetOneAction, CHARACTER_GET_ONE } from './characters.types';

export function* getOneCharacter(action: CharacterGetOneAction) {
  try {
    const { data } = yield call(charactersService.getCharacterById, action.payload);
    if (data) {
      yield put(characterGetOneSuccess(data[0]));
    } else {
      yield put(characterGetOneError('Empty Response'));
    }
  } catch (err) {
    const { response }: any = err;
    const { data } = response;
    const message = Array.isArray(data.message) ? data.message[0] : data.message;
    yield put(characterGetOneError(message));
  }
}

export default function* root() {
  yield all([takeLatest(CHARACTER_GET_ONE, getOneCharacter)]);
}
