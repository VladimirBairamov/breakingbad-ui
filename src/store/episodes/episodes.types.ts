import { RequestState } from '../common.types';

export enum EpisodeSeries {
  BreakingBad = 'Breaking Bad',
  BetterCallSaul = 'Better Call Saul',
}

export interface IEpisode {
  episode_id: number;
  title: string;
  season: number;
  episode: number;
  air_date: string;
  characters: string[];
  series: EpisodeSeries;
}

export interface IEpisodesState {
  episodes: IEpisode[];
  episodesGetState: RequestState | null;
  episodesGetError: string | null;

  currentEpisode: IEpisode | null;
  episodeByIdGetState: RequestState | null;
  episodeByIdGetError: string | null;
}

export const EPISODES_GET = 'EPISODES_GET';
export const EPISODES_GET_SUCCESS = 'EPISODES_GET_SUCCESS';
export const EPISODES_GET_ERROR = 'EPISODES_GET_ERROR';

export const EPISODE_GET_ONE = 'EPISODE_GET_ONE';
export const EPISODE_GET_ONE_SUCCESS = 'EPISODE_GET_ONE_SUCCESS';
export const EPISODE_GET_ONE_ERROR = 'EPISODE_GET_ONE_ERROR';

// Get Episodes
export interface EpisodesGetAction {
  type: typeof EPISODES_GET;
  payload: EpisodeSeries;
}

export interface EpisodesGetSuccessAction {
  type: typeof EPISODES_GET_SUCCESS;
  payload: IEpisode[];
}

export interface EpisodesGetErrorAction {
  type: typeof EPISODES_GET_ERROR;
  payload: any;
}

// Get One Episode
export interface EpisodesGetOneAction {
  type: typeof EPISODE_GET_ONE;
  payload: number;
}

export interface EpisodesGetOneSuccessAction {
  type: typeof EPISODE_GET_ONE_SUCCESS;
  payload: IEpisode;
}

export interface EpisodesGetOneErrorAction {
  type: typeof EPISODE_GET_ONE_ERROR;
  payload: any;
}

export type EpisodesActionTypes =
  | EpisodesGetAction
  | EpisodesGetSuccessAction
  | EpisodesGetErrorAction
  | EpisodesGetOneAction
  | EpisodesGetOneSuccessAction
  | EpisodesGetOneErrorAction;
