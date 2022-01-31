import { httpService } from './http.service';

const getCharacterById = (name: string) => {
  return httpService.get('characters', {
    params: {
      name,
    },
  });
};

export default {
  getCharacterById,
};
