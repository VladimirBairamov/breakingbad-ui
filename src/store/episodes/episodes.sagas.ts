import { all, call, put, takeLatest } from 'redux-saga/effects';
import episodesService from 'services/episodes.service';
import {
  episodeGetOneError,
  episodeGetOneSuccess,
  episodesGetError,
  episodesGetSuccess,
} from './episodes.actions';
import {
  EpisodesGetAction,
  EpisodesGetOneAction,
  EPISODES_GET,
  EPISODE_GET_ONE,
} from './episodes.types';

export function* getEpisodes(action: EpisodesGetAction) {
  try {
    const { data } = yield call(episodesService.getEpisodes, action.payload);
    if (data) {
      yield put(episodesGetSuccess(data));
    } else {
      yield put(episodesGetError('Empty Response'));
    }
  } catch (err) {
    const { response }: any = err;
    const { data } = response;
    const message = Array.isArray(data.message) ? data.message[0] : data.message;
    yield put(episodesGetError(message));
  }
}

export function* getOneEpisode(action: EpisodesGetOneAction) {
  try {
    const { data } = yield call(episodesService.getEpisodeById, action.payload);
    if (data) {
      yield put(episodeGetOneSuccess(data[0]));
    } else {
      yield put(episodeGetOneError('Empty Response'));
    }
  } catch (err) {
    const { response }: any = err;
    const { data } = response;
    const message = Array.isArray(data.message) ? data.message[0] : data.message;
    yield put(episodeGetOneError(message));
  }
}

export default function* root() {
  yield all([takeLatest(EPISODES_GET, getEpisodes), takeLatest(EPISODE_GET_ONE, getOneEpisode)]);
}
