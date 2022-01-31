import { EpisodeSeries } from 'store/episodes/episodes.types';
import { httpService } from './http.service';

const getEpisodes = (series: EpisodeSeries) => {
  return httpService.get('episodes', {
    params: {
      series,
    },
  });
};

const getEpisodeById = (id: number) => {
  return httpService.get(`episodes/${id}`);
};

export default {
  getEpisodes,
  getEpisodeById,
};
