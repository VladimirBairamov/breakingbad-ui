import {
  IEpisodesState,
  EpisodesActionTypes,
  EPISODES_GET,
  EPISODES_GET_ERROR,
  EPISODES_GET_SUCCESS,
  EPISODE_GET_ONE,
  EPISODE_GET_ONE_ERROR,
  EPISODE_GET_ONE_SUCCESS,
} from './episodes.types';
import produce from 'immer';
import { RequestState } from '../common.types';

const initialState: IEpisodesState = {
  episodes: [],
  episodesGetState: null,
  episodesGetError: null,

  currentEpisode: null,
  episodeByIdGetState: null,
  episodeByIdGetError: null,
};

const CountryReducer = (state = initialState, action: EpisodesActionTypes) =>
  produce(state, (draft) => {
    switch (action.type) {
      case EPISODES_GET:
        draft.episodesGetState = RequestState.Loading;
        break;

      case EPISODES_GET_ERROR:
        draft.episodesGetState = RequestState.Error;
        draft.episodesGetError = action.payload;
        break;

      case EPISODES_GET_SUCCESS:
        draft.episodesGetState = RequestState.Success;
        draft.episodesGetError = null;
        draft.episodes = action.payload;
        break;

      case EPISODE_GET_ONE:
        draft.episodeByIdGetState = RequestState.Loading;
        break;

      case EPISODE_GET_ONE_ERROR:
        draft.episodeByIdGetState = RequestState.Error;
        draft.episodeByIdGetError = action.payload;
        break;

      case EPISODE_GET_ONE_SUCCESS:
        draft.episodeByIdGetState = RequestState.Success;
        draft.episodeByIdGetError = null;
        draft.currentEpisode = action.payload;
        break;
    }
  });

export default CountryReducer;
