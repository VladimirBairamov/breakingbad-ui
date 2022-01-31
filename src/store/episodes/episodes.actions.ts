import {
  IEpisode,
  EPISODES_GET,
  EPISODES_GET_SUCCESS,
  EPISODES_GET_ERROR,
  EPISODE_GET_ONE,
  EPISODE_GET_ONE_SUCCESS,
  EPISODE_GET_ONE_ERROR,
  EpisodeSeries,
} from './episodes.types';

// Get Episodes
export const episodesGet = (payload: EpisodeSeries) => ({
  type: EPISODES_GET,
  payload: payload,
});

export const episodesGetSuccess = (payload: IEpisode[]) => ({
  type: EPISODES_GET_SUCCESS,
  payload: payload,
});

export const episodesGetError = (error: any) => ({
  type: EPISODES_GET_ERROR,
  payload: error,
});

// Get One Episode
export const episodeGetOne = (payload: number) => ({
  type: EPISODE_GET_ONE,
  payload: payload,
});

export const episodeGetOneSuccess = (payload: IEpisode) => ({
  type: EPISODE_GET_ONE_SUCCESS,
  payload: payload,
});

export const episodeGetOneError = (error: any) => ({
  type: EPISODE_GET_ONE_ERROR,
  payload: error,
});
