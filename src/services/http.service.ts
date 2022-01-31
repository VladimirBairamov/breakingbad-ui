import axios from 'axios';

export const httpService = axios.create({
  baseURL: 'https://www.breakingbadapi.com/api/',
});
